import {msgsModel} from "../dao/models/messages.js"
import { daoCarts } from "./index.js";
import mongoose from "mongoose";
import { __dirname } from '../utils.js';

class ChatManager {
    async addMessage(message) {
        let newMessage = await daoCarts.create(message);
        return newMessage._id;
    }
    async updateContent(messageId, content) {
        try { (await daoCarts.update(messageId, {message: content})).errors } catch { throw "No message with ID " + cartId; }
    }
        async deleteMessage(messageId) {
        try { (await daoCarts.delete(messageId)).errors } catch { throw "No message with ID " + cartId; }
    }
    async getMessages() {
        let products = await daoCarts.get();
        return products;
    }
    async cleanMessages(){
        await daoCarts.deleteMany({});
    }
}

const chatManager = new ChatManager();
export default chatManager;


