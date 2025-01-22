import express from "express";
import authRouter from "./routes/auth.route";
import chatRouter from "./routes/chat.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/auth", authRouter);
app.use("/chat", chatRouter);


app.listen(3002, () => {
    console.log("Server started on port 3002");
});