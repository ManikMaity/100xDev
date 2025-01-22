import {Router} from "express";
const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.json({msg : "Auth route working"})
})

export default authRouter;