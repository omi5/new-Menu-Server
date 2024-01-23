"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    restaurantId: { type: Number },
    // categoryId: {type: String},
    categoryName: { type: String, required: true },
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
exports.categoryModel = (0, mongoose_1.model)('categories', categorySchema);
