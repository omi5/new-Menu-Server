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
// const ItemDietaryRestrictions= new Schema<ItemDietaryRestrictionsInterface>({
//     allergens: String
// })
// const packaging = new Schema<PackagingInterface>({
//     dimensionLength: Number,
//     dimensionWidth: Number,
//     dimensionHeight: Number,
// })
const ingredients = new mongoose_1.Schema({
    id: Number,
    restaurantId: Number,
    ingredientName: String,
    unitOfStock: String,
    quantity: Number,
    costPerUnit: Number,
    caloriesPerUnit: Number
});
const addons = new mongoose_1.Schema({
    id: Number,
    restaurantId: Number,
    ingredientName: String,
    unitOfStock: String,
    quantity: Number,
    costPerUnit: Number,
    caloriesPerUnit: Number,
    price: String
});
const addOption = new mongoose_1.Schema({
    // ingredientName: String,
    // quantity: Number,
    ingredients: addons
});
const noOption = new mongoose_1.Schema({
    // ingredientName: String,
    // quantity: Number,
    ingredients: addons
});
const recipeItemSchema = new mongoose_1.Schema({
    restaurantId: Number,
    categoryId: Number,
    recipeId: { type: Number },
    recipeName: String,
    recipeItemPortionSize: Number,
    recipeItemPreparationTime: Number,
    recipeItemCost: Number,
    recipeItemCalories: Number,
    recipeItemDescription: String,
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
    itemPortionsize: String,
    itemPreparationtime: Number,
    itemLastingTime: Number,
    typeOfFoods: [],
    itemPackingType: [],
    servingTemperature: Number,
    itemDietaryRestrictions: [],
    // itemPackingDimention: packaging,
    ingredients: {
        rawIngredients: [ingredients],
        recipes: [recipeItemSchema]
    },
    options: { add: [addons], no: [addons] }
});
const menuItemSchema = new mongoose_1.Schema({
    restaurantId: Number,
    categoryId: String,
    categoryName: String,
    mealTimeId: Number,
    item: itemSchema,
});
// Middleware to auto-increment ItemId
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
