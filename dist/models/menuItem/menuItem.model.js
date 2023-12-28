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
exports.menuItemModel = void 0;
const mongoose_1 = require("mongoose");
const nextSequnece_1 = require("../../utils/nextSequnece");
const ItemDietaryRestrictions = new mongoose_1.Schema({
    allergens: String
});
const packaging = new mongoose_1.Schema({
    dimensionLength: Number,
    dimensionWidth: Number,
    dimensionHeight: Number,
});
const ingredients = new mongoose_1.Schema({
    id: Number,
    restaurantId: Number,
    ingredientName: String,
    unitOfStock: String,
    quantity: Number,
    costPerUnit: Number,
    caloriesPerUnit: Number
});
const addOption = new mongoose_1.Schema({
    ingredientName: String,
    quantity: Number,
    ingredients: [ingredients]
});
const noOption = new mongoose_1.Schema({
    ingredientName: String,
    quantity: Number,
    ingredients: [ingredients]
});
const itemSchema = new mongoose_1.Schema({
    itemId: { type: Number },
    itemName: String,
    itemImage: String,
    itemDescription: String,
    itemPrice: Number,
    itemCalories: Number,
    timeOfDay: [String, String, String],
    itemProfileTastyTags: [],
    itemPortionsize: Number,
    itemPreparationtime: Number,
    itemLastingTime: Number,
    itemPackingType: String,
    servingTemperature: Number,
    itemDietaryRestrictions: [ItemDietaryRestrictions],
    itemPackingDimention: packaging,
    ingredients: [ingredients],
    options: { add: [addOption], no: [noOption] }
});
const menuItemSchema = new mongoose_1.Schema({
    restaurantId: Number,
    categoryId: Number,
    item: [itemSchema],
});
// Middleware to auto-increment tableId
itemSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const doc = this;
        if (!doc.itemId) {
            doc.itemId = yield (0, nextSequnece_1.getNextSequenceValue)('menuItemCounter');
        }
        next();
    });
});
exports.menuItemModel = (0, mongoose_1.model)('menuItems', menuItemSchema);
