import Dao from "../dao/dao-manager.js";
import { cartsModel } from "../dao/models/carts.js";
import { msgsModel } from "../dao/models/messages.js";
import { productsModel } from "../dao/models/products.js";
import { userModel } from "../dao/models/users.js";

let daoProducts = new Dao(productsModel)
let daoCarts = new Dao(cartsModel)
let daoUsers = new Dao(userModel)
let daoMsgs = new Dao(msgsModel)

export {daoProducts, daoCarts, daoUsers, daoMsgs};