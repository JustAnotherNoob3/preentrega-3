import { Router } from "express";
import { __dirname } from "../utils.js";
import cartController from "../controllers/cartController.js";
const cartRouter = Router();

cartRouter.get("/:cid", cartController.getCart);

cartRouter.post("/", cartController.createCart);

cartRouter.post("/:cid/products/:pid", cartController.addProduct);

cartRouter.put("/:cid/products/:pid", cartController.modifyProductQuantity);

cartRouter.put("/:cid", cartController.setCart);

cartRouter.delete("/:cid/products/:pid", cartController.deleteProduct);

cartRouter.delete("/:cid", cartController.resetCart);

//! FOR TESTING ONLY
cartRouter.get("/", cartController.getIds);

export default cartRouter;