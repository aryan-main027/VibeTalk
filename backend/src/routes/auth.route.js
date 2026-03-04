import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";

const authRouter = Router();
 
authRouter.post('/signup',signup)

authRouter.get('/login',(req,res)=>{
  res.send("Happy Holi login");
})

authRouter.get('/logout',(req,res)=>{
  res.send("Happy Holi logout");
})

export default authRouter;