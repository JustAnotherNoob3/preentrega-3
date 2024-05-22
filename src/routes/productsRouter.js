import { Router } from "express";
import { __dirname } from "../utils.js";
import productsController from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", productsController.getProducts);

productsRouter.get("/:pid", productsController.GetProductById);

productsRouter.post("/", productsController.createProduct);

productsRouter.put("/:pid", productsController.editProduct);

productsRouter.delete("/:pid", productsController.deleteProduct);

export default productsRouter;