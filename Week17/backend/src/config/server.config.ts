import dotenv from 'dotenv';
dotenv.config();

export const POSTGRES_URL = process.env.POSTGRES_URL;
export const PORT = Number(process.env.PORT) || 3000;