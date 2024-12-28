export const JWT_SECRET : string = process.env.JWT_SECRET || "default_secret"; 
export const SALT_ROUND = Number(process.env.SALT_ROUND);