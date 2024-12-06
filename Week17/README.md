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

