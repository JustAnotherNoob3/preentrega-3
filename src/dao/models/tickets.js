import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
const { Schema } = mongoose;

const collection = "Tickets";

const schema = new Schema({
    code: String,
    purchase_datetime: String,
    amount:Number,
    purchaser: String
});
schema.plugin(mongoosePaginate);
const cartsModel = mongoose.model(collection, schema);
export { cartsModel };