import express from "express";
import { PORT } from "./configs/server.config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg : "Server running successfully."
    })
})

app.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
})