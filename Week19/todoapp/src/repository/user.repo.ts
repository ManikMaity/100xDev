import prisma from "@/config/db.config";

const userRepo = prisma.user;

export type User = {
    username: string;
    email: string;
    password: string;
}

export async function getUserByEmail(email: string) {
  try {
    const user = await userRepo.findFirst({
      where: {
        email: email,
      }
    });

    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    return user;

  } catch (error: any) {
    throw {
      status: 400,
      message: "Cant get user by email",
      error: error,
    };
  }
}

export async function createUser(data : User) {
    try {
        const createdUser = await userRepo.create({
            data : data,
            select : {
                username : true,
                email : true
            }
        })

        return createdUser;

    }
    catch (error: any) {
        throw {
            status: 400,
            message: "Error while creating user",
            error: error,
        };
    }
}
