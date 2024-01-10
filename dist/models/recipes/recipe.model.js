"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeModel = void 0;
const mongoose_1 = require("mongoose");
const nextSequnece_1 = require("../../utils/nextSequnece");
const ingredients = new mongoose_1.Schema({
    id: Number,
    restaurantId: Number,
    ingredientName: String,
    unitOfStock: String,
    quantity: Number,
    costPerUnit: Number,
    caloriesPerUnit: Number
});
const recipeItemSchema = new mongoose_1.Schema({
    restaurantId: Number,
    categoryId: Number,
    recipeId: { type: Number },
    recipeName: String,
    recipeItemPortionSize: String,
    recipeItemPreparationTime: Number,
    recipeItemCost: Number,
    recipeItemCalories: Number,
    recipeItemDescription: String,
    ingredients: [ingredients]
});
// Middleware to auto-increment recipeId
recipeItemSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const doc = this;
        if (!doc.recipeId) {
            doc.recipeId = yield (0, nextSequnece_1.getNextSequenceValue)('recipeItemCounter');
        }
        next();
    });
});
exports.recipeModel = (0, mongoose_1.model)('recipes', recipeItemSchema);
