# ORM - Object Relational Mapping
- Its is a programming technique to map data to objects.
- Orm let us to intract with database easily.
- ORM helps us to flip between database like mysql to mongodb and vice versa. We dont have to change the repository functionality. (Rarely used)
- Its helps to typesafety functionality. We will get auto completion and intellisense.
- ORM creates the migration file for us automatically.

## Migration
- Migrations are the changes to the database schema.
- Like adding a new column to the table or removing a column from the table.
- All the Migration should be in the folder. ORM creates the migration file for us automatically.

## Some ORMS - `Prisma`, `Drezel`

## Prisma
- In a single file we can create all schema.
- As we change the shema file it will generate the migration file.
- Types and auto completion.

## Prisma Steps
- Make a typescript project.
- Intall prisma.
```bash
npm i prisma
```
- Create a prisma folder and create a schema.
```bash
npx prisma init
```
- It will create a schema.prisma file.
- With `postgres` as default database.
- Make a postgres database and put the database url in the env prisma generated file.
- Prisma connect to the database.

## Define a model (table)
```prisma
model User {
  id  Int @default(autoincrement()) @id
  username String @unique
  password String
  email String @unique
}
```
- Run the prisma migration.
```bash
npx prisma migrate dev
```
- It will ask for name of the migration. Give that.
- It will create the migration files in the migrations folder.
- We dont do anything in the migration folder.
- Now in future we can chnage the schema in the schema.prisma file. We have to remigrate the database. using the same command `npx prisma migrate dev`.

## Connect to the database using prisma
- We have to generate client from prisma to connect to the database in nodejs.
```bash
npx prisma generate
```
- It will generate a @prisma/client folder in node_modules.
- Now we can interact with the database using `PrismaClient` like this
```ts
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function createUser(name: string, email: string, password: string) {
    const user = await client.user.create({
        data : {
            username: name,
            email: email,
            password: password
        }
    })
}
```

<details>
<summary><b>Code for get all users</b></summary>

```javascript
export async function getAllUser() {
  const users = await client.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });

  return users;
}
```

</details>

<details>
<summary><b>Code for update user</b></summary>

```javascript
export async function updateUser(
  id: number,
  data: { username?: string; email?: string; password?: string }
) {
  const user = await client.user.update({
    where: {
      id: id,
    },
    data: data,
  });
  return user;
}
```

</details>

## Relationship in prisma model
- We can define relationship between two models(tables).
- We have to add `todos Todos[]` in the user model. and ` user User @relation(fields: [user_id], references: [id])` in the todo model.
- Then run the migration. `npx prisma migrate dev`.

<details>
<summary><b>Code</b></summary>

```prisma
model User {
  id  Int @default(autoincrement()) @id
  username String @unique
  password String
  email String @unique
  todos Todos[]
}

model Todos {
  id Int @default(autoincrement()) @id
  title String @db.VarChar(100)
  description String
  isCompleted Boolean @default(false)
  user_id Int
  user User @relation(fields: [user_id], references: [id])
}
```
</details>

- To get relationship table data we have to use `include : { todos : true }`.
```ts
export async function getUserData(userId : number) {
    const data = await client.user.findFirst({
        where: {
            id : userId
        },
        include : {
            todos : true
        }
    })

    return data;
}
```
###  Task  - See the how to see the raw query in the prisma client, pagination ofset, sorting, many to many
### Task - Make a databe using ts, express, prisma, postgres, zod