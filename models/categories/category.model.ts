import { Schema, model } from "mongoose";
import { categoryInterface } from "../../interfaces/category.interface";
import { getNextSequenceValue } from '../../utils/nextSequnece';


const categorySchema = new Schema<categoryInterface>({
    restaurantId: {type: Number},
    // categoryId: {type: String},
    categoryName: {type: String, required: true},
    // categoryDescription: { type: String, required: true},
    // categoryImage: {type: String}
});

// Middleware to auto-increment tableId
// categorySchema.pre('save', async function (next) {
//     const doc = this;
//     if (!doc.categoryId) {
//         doc.categoryId = await getNextSequenceValue('tableIdCounter');
//     }
//     next();
// });

export const categoryModel = model('categories', categorySchema);