import pgClient from "../config/db.config";

export async function createUser(
  username: string,
  password: string,
  email: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  try {
    const query1 =
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *";
    const query2 =
      "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5) RETURNING *";

    await pgClient.query("BEGIN");

    const response = await pgClient.query(query1, [username, password, email]);

    const userid = response.rows[0].id;

    const address = await pgClient.query(query2, [
      userid,
      city,
      country,
      street,
      pincode,
    ]);

    await pgClient.query("COMMIT");

    return { ...response.rows[0], address: address.rows[0] };
  } catch (error) {
    throw error;
  }
}

export async function createAddress(
  user_id: number,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  const response = await pgClient.query(
    "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [user_id, city, country, street, pincode]
  );
  return response.rows[0];
}

export async function getUserData(userid: number) {
  const queryString = "SELECT * FROM users WHERE id = $1";
  const queryString2 = "SELECT * FROM addresses WHERE user_id = $1";
  const user = await pgClient.query(queryString, [userid]);
  const address = await pgClient.query(queryString2, [userid]);
  const { password, ...userData } = user.rows[0];
  return { ...userData, address: address.rows };
}

export async function getUserDataJoin(userid: number) {
  const queryString = `select users.id, users.username, users.email, addresses.city, 
    addresses.country, addresses.street, addresses.pincode 
    from users full join addresses on users.id = addresses.user_id where users.id = $1`;
    const user = await pgClient.query(queryString, [userid]);
    return user.rows[0];
}
