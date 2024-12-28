export const JWT_SECRET : string = process.env.JWT_SECRET || "default_secret"; 
export const SALT_ROUND = Number(process.env.SALT_ROUND);
export const API_URL = process.env.NEXT_PUBLIC_API_URL;