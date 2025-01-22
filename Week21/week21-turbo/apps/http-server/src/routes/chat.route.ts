import {Router} from "express";

const chatRouter = Router();

chatRouter.get("/", (req, res) => {
    res.json({msg : "Chat route working"})
})

export default chatRouter;