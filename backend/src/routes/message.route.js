import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/send",(req,res)=>{
  res.send("Messaging ...");
})

export default messageRouter;