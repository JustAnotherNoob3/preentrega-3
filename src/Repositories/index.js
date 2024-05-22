import Dao from "../dao/dao-manager.js";
import { cartsModel } from "../dao/models/carts.js";
import { msgsModel } from "../dao/models/messages.js";
import { productsModel } from "../dao/models/products.js";
import { userModel } from "../dao/models/users.js";
import { ticketsModel } from "../dao/models/tickets.js";

let daoProducts = new Dao(productsModel)
let daoCarts = new Dao(cartsModel)
let daoUsers = new Dao(userModel)
let daoMsgs = new Dao(msgsModel)
let daoTickets = new Dao(ticketsModel)

export {daoProducts, daoCarts, daoUsers, daoMsgs, daoTickets};