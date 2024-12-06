# Progress

## Why not use NoSQL Database?
- NoSQL can be curupted or lost.
- Can cause runtime error.
- Inconsistent data.

### We can use mongoose to enforce schema ?
- We can use mongoose to enforce schema but it is enforse in the server side not in the database.
- So, In future if we have to use the same database in another project and we give diff schema in mongoose it will not complain.

## Why use SQL Database?
- In enforse of schema in database level.
- The downside of SQL is to update the schema in the database - `migration`.

## How to get a postgress database
- Go to neon.tech and create a database.
- Copy the connection string.

```bash
postgresql://neondb_owner:************@ep-summer-silence-a5ie6bjz.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### PRIMARY KEY
- Primary key is the unique identifier of the row in the table.
- Just like _id in mongoDB.
- In most case it is id column.

### How to connect to the Progress with nodejs
- We use progress client like `pg`
- install pg in the node project.
```bash
npm i pg @types/pg
```

### Injecting SQL query
```ts
        const response = await pgClient.query(`INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}') RETURNING *`)
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
        const response = await pgClient.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *', [username, password, email]);
```