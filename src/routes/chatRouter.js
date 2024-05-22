import { Router } from "express";
import { __dirname } from "../utils.js";
import chatController from "../controllers/chatController.js";
const chatRouter = Router();

chatRouter.get("/", chatController.getMessages);
chatRouter.post("/", chatController.sendMessage);

chatRouter.put("/:pid", chatController.editMessage);
chatRouter.delete("/clean", chatController.cleanChat);
chatRouter.delete("/:pid", chatController.deleteMessage);


export default chatRouter;