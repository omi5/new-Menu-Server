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
exports.getAllRecipeByRestaurantIdController = exports.deleteRecipeController = exports.updateRecipeByIdController = exports.getRecipeByIdController = exports.getAllRecipeController = exports.createRecipeController = void 0;
const recipe_query_1 = require("../models/recipes/recipe.query");
const createRecipeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const objectOfRecipe = Object.assign({}, req.body);
        const resId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.employeeInformation.restaurantId;
        if (resId) {
            objectOfRecipe.restaurantId = resId;
        }
        else {
            // Handle the case when restaurantId is not available
            console.error("Restaurant ID is not available.");
        }
        const newRecipe = yield (0, recipe_query_1.createRecipe)(objectOfRecipe);
        res.status(201).json(newRecipe);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createRecipeController = createRecipeController;
const getAllRecipeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allRecipe = yield (0, recipe_query_1.getAllRecipe)();
        res.status(200).json(allRecipe);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllRecipeController = getAllRecipeController;
const getRecipeByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const oneRecipe = yield (0, recipe_query_1.getRecipeById)(id);
        res.status(200).json(oneRecipe);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getRecipeByIdController = getRecipeByIdController;
const updateRecipeByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const objectOfRecipe = Object.assign({}, req.body);
        const updatedRecipe = yield (0, recipe_query_1.updateRecipeById)(id, objectOfRecipe);
        res.status(200).json(updatedRecipe);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateRecipeByIdController = updateRecipeByIdController;
const deleteRecipeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedRecipe = yield (0, recipe_query_1.deleteRecipe)(id);
        res.status(200).json(deletedRecipe);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteRecipeController = deleteRecipeController;
const getAllRecipeByRestaurantIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // const id: number = Number(req.params.id);
        const resId = Number((_b = req.user) === null || _b === void 0 ? void 0 : _b.employeeInformation.restaurantId);
        const recipes = yield (0, recipe_query_1.getAllRecipeByRestaurantId)(resId);
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllRecipeByRestaurantIdController = getAllRecipeByRestaurantIdController;
