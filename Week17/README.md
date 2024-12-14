# Postgress

### Why not use NoSQL Database?

- NoSQL can be curupted or lost.
- Can cause runtime error.
- Inconsistent data.

### We can use mongoose to enforce schema ?

- We can use mongoose to enforce schema but it is enforse in the server side not in the database.
- So, In future if we have to use the same database in another project and we give diff schema in mongoose it will not complain.

### Why use SQL Database?

- In enforse of schema in database level.
- The downside of SQL is to update the schema in the database - `migration`.

### How to get a postgress database

- Go to neon.tech and create a database.
- Copy the connection string.

```bash
postgresql://neondb_owner:************@ep-summer-silence-a5ie6bjz.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### PRIMARY KEY

- Primary key is the unique identifier of the row in the table.
- Just like \_id in mongoDB.
- In most case it is id column.

### How to connect to the Progress with nodejs

- We use progress client like `pg`
- install pg in the node project.

```bash
npm i pg @types/pg
```

```ts
import {Client} from 'pg';
import { POSTGRES_URL } from './server.config';
const pgClient = new Client(POSTGRES_URL);
export default pgClient;
```

### Injecting SQL query

```ts
const response = await pgClient.query(
  `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}') RETURNING *`
);
```

- If we query like this user can inject their SQL query into this like this.

```ts
const reqData = {
    username: "abc",
    email: "abc@123"
    password: "abc'); DELETE FROM users;",
}
```

- This will delete all the user data. We should prevent this.
- We should use parameterized query.

```ts
const response = await pgClient.query(
  "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
  [username, password, email]
);
```

### How to make relationship between tables?

```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    foreign KEY (user_id) references users(id) on delete cascade
);
```

- We have to use foreign key to make relationship between tables.
- Here we made relationship between todo and user. using user id.
- `on delete cascade` means if user is deleted then all the todo of that user will be deleted.
- `on delete restrict` means if user's todos exists then user can't be deleted.4

### Transactions

- We can use transactions to make sure that all the queries are executed sequentially.
- So, if one query fails then all the queries will be rolled back.
- To create transaction we use `BEGIN;` and `COMMIT;`

```ts
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
```

### Joins
- joining data from multiple tables.
- Without joins we have to make multiple calls to the database to get data.
```ts
// This is bad ❌
export async function getUserData(userid : number) {
    const queryString = "SELECT * FROM users WHERE id = $1";
    const queryString2 = "SELECT * FROM addresses WHERE user_id = $1";
    const user = await pgClient.query(queryString, [userid]);
    const address = await pgClient.query(queryString2, [userid]);
    const { password, ...userData } = user.rows[0];
    return { ...userData, address: address.rows };
}
```
- With joins we can get data from multiple tables in a single query.
```ts
// This is good ✅
export async function getUserDataJoin(userid: number) {
  const queryString = `select users.id, users.username, users.email, addresses.city, 
    addresses.country, addresses.street, addresses.pincode 
    from users join addresses on users.id = addresses.user_id where users.id = $1`;
    const user = await pgClient.query(queryString, [userid]);
    return user.rows[0];
}
```

### Types of Joins
- **Inner Join** - Returns rows where there is a match in both tables. Default join.
- **Left Join** - Returns all records from the left table, and the matched records from the right table.
- **Right Join** - Returns all records from the right table, and the matched records from the left table.
- **Full Join** - Returns all records when there is a match in either left or right table.