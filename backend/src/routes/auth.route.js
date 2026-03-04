import { Router } from "express";

const authRouter = Router();
 
authRouter.get('/signup',(req,res)=>{
  res.send("Happy Holi");
})

export default authRouter;