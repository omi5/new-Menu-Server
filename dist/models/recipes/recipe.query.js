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
exports.deleteRecipe = exports.updateRecipeById = exports.getRecipeById = exports.getAllRecipe = exports.getAllRecipeByRestaurantId = exports.createRecipe = void 0;
const recipe_model_1 = require("./recipe.model");
const createRecipe = (recipeObject) => __awaiter(void 0, void 0, void 0, function* () {
    const newRecipe = yield recipe_model_1.recipeModel.create(Object.assign({}, recipeObject));
    return newRecipe;
});
exports.createRecipe = createRecipe;
const getAllRecipeByRestaurantId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const findAllItemsUnderRestaurant = yield recipe_model_1.recipeModel.aggregate([
        {
            $match: {
                restaurantId: id
            },
        },
        {
            $lookup: {
                from: 'recipes',
                localField: 'restaurantId',
                foreignField: 'restaurantId',
                as: 'listOfItems'
            },
        },
    ]);
    return findAllItemsUnderRestaurant;
});
exports.getAllRecipeByRestaurantId = getAllRecipeByRestaurantId;
const getAllRecipe = () => __awaiter(void 0, void 0, void 0, function* () {
    const allMenuItem = recipe_model_1.recipeModel.find();
    return allMenuItem;
});
exports.getAllRecipe = getAllRecipe;
const getRecipeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleMenuItem = recipe_model_1.recipeModel.findOne({ _id: id });
    return singleMenuItem;
});
exports.getRecipeById = getRecipeById;
const updateRecipeById = (id, menuItemObject) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMenuItewm = yield recipe_model_1.recipeModel.findOneAndUpdate({ _id: id }, Object.assign({}, menuItemObject), { new: true });
    return updatedMenuItewm;
});
exports.updateRecipeById = updateRecipeById;
const deleteRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const removeMenuItem = yield recipe_model_1.recipeModel.findOneAndDelete({ _id: id });
    return removeMenuItem;
});
exports.deleteRecipe = deleteRecipe;
