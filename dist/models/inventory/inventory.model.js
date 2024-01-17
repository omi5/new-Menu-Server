"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryIngredientModel = void 0;
const mongoose_1 = require("mongoose");
const inventoryIngredient = new mongoose_1.Schema({
    id: { type: Number },
    ingredientName: { type: String },
    unitOfStock: { type: String },
    costPerUnit: { type: Number },
    caloriesPerUnit: { type: Number },
    liquid: { type: String }
});
exports.inventoryIngredientModel = (0, mongoose_1.model)('inventoryIngredient', inventoryIngredient);
