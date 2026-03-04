import { Router } from "express";

const authRouter = Router();
 
authRouter.get('/signup',(req,res)=>{
  res.send("Happy Holi");
})

authRouter.get('/login',(req,res)=>{
  res.send("Happy Holi login");
})

authRouter.get('/logout',(req,res)=>{
  res.send("Happy Holi logout");
})

export default authRouter;