import express from "express";
import { PORT } from "./config/server.config";
import pgClient from "./config/db.config";
import { createAddress, createUser, getUserData, getUserDataJoin } from "./repositories/user.repo";
const app = express();
app.use(express.json()); 

app.post("/address", async (req, res) => {
    try{
        const {user_id, city, country, street, pincode } : { user_id: number, city: string, country: string, street: string, pincode: string } = req.body;
        console.log(user_id, city, country, street, pincode);
        const response = await createAddress(user_id, city, country, street, pincode);
        res.json({
            message: "Address created successfully",
            data: response
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error
        })
    }
})


app.post("/signup", async (req, res) => {
    try {
        const { username, password, email, city, country, street, pincode } : { username: string, password: string, email: string, city: string, country: string, street: string, pincode: string } = req.body;
        const response = await createUser(username, password, email, city, country, street, pincode);
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

app.get("/metadata", async (req, res) => {
    try {
        const userid : number = req.query.userid as unknown as number;
        const response = await getUserDataJoin(userid);
        res.json({
            message: "User fetched successfully",
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