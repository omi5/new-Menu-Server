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
exports.getAllCategoryByRestaurantIdController = exports.getcategoryByUsingCategoryIdController = exports.deleteCategoryController = exports.updateCategoryByIdController = exports.getCategoriesByIdController = exports.getAllCategoriesController = exports.createCategoryController = void 0;
const category_query_1 = require("../models/categories/category.query");
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const objectOfCategory = Object.assign({}, req.body);
        const resId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.employeeInformation.restaurantId;
        if (resId) {
            objectOfCategory.restaurantId = resId;
        }
        else {
            // Handle the case when restaurantId is not available
            console.error("Restaurant ID is not available.");
        }
        const category = yield (0, category_query_1.createCategory)(objectOfCategory);
        res.status(201).json(category);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
    }
});
exports.createCategoryController = createCategoryController;
const getAllCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCategories = yield (0, category_query_1.getAllCategories)();
        res.status(200).json(allCategories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllCategoriesController = getAllCategoriesController;
//Find all Items Under the category
const getCategoriesByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const categories = yield (0, category_query_1.getCategoriesById)(id);
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getCategoriesByIdController = getCategoriesByIdController;
const updateCategoryByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const categoryObject = Object.assign({}, req.body);
        const updatedCategory = yield (0, category_query_1.updateCategoryById)(id, categoryObject);
        res.json(updatedCategory);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateCategoryByIdController = updateCategoryByIdController;
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedCategory = yield (0, category_query_1.deleteCategory)(id);
        res.json(deletedCategory);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteCategoryController = deleteCategoryController;
//Find All categories
const getcategoryByUsingCategoryIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const category = yield (0, category_query_1.getcategoryByUsingCategoryId)(id);
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getcategoryByUsingCategoryIdController = getcategoryByUsingCategoryIdController;
const getAllCategoryByRestaurantIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // const id: number = Number(req.params.id);
        const resId = Number((_b = req.user) === null || _b === void 0 ? void 0 : _b.employeeInformation.restaurantId);
        const category = yield (0, category_query_1.getAllCategoryByRestaurantId)(resId);
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllCategoryByRestaurantIdController = getAllCategoryByRestaurantIdController;
