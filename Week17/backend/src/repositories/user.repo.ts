import pgClient from "../config/db.config";

export async function createUser(username : string, password : string, email : string) {
    try {
        const response = await pgClient.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *', [username, password, email]);
        return response.rows[0];
    }
    catch (error) {
        throw error
    }
}