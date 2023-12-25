"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    restaurantId: { type: Number },
    categoryName: { type: String, required: true },
    categoryDescription: { type: String, required: true },
    categoryImage: { type: String }
});
exports.categoryModel = (0, mongoose_1.model)('categories', categorySchema);
