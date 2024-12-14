import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  const user = await client.user.create({
    data: {
      username: name,
      email: email,
      password: password,
    },
  });

  return user;
}

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

export async function createTodo(title : string, description : string, user_id : number) {
    const todo = await client.todos.create({
        data : {
            title,
            description,
            user_id
        }
    })

    return todo;
}

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
