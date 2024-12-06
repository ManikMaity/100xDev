import express from "express";
import { PORT } from "./config/server.config";
import pgClient from "./config/db.config";
import { createUser } from "./repositories/user.repo";
const app = express();
app.use(express.json()); 


app.post("/signup", async (req, res) => {
    try {
        const { username, password, email } : { username: string, password: string, email: string } = req.body;
        const response = await createUser(username, password, email);
        res.json({
            message: "User created successfully",
            data: response
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error
        })
    }
})


app.listen(PORT, async () => {
    try {
        await pgClient.connect();
        console.log('Database connected');
        console.log(`Server is running on port http://localhost:${PORT}`);
    }
    catch (error) {
       console.log("Error connecting to database", error);
    }
})