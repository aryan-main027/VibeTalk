import { Router } from "express";
import { getAllContacts , getMessageByUserId ,sendMessage , getChatPartners } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
const messageRouter = Router();

messageRouter.use(arcjetProtection,protectRoute)
messageRouter.get("/contacts",getAllContacts);
messageRouter.get("/chats",getChatPartners);
messageRouter.get("/:id",getMessageByUserId);
messageRouter.post("/send/:id",sendMessage);

export default messageRouter;