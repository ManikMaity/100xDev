//  @ts-nocheck
import { PrismaClient } from "@prisma/client";

const prisma : PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = globalThis.prismaClient || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaClient = prisma;

export default prisma;