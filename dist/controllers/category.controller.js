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
exports.deleteCategoryController = exports.updateCategoryByIdController = exports.getCategoriesByIdController = exports.getAllCategoriesController = exports.createCategoryController = void 0;
const category_query_1 = require("../models/categories/category.query");
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objectOfCategory = Object.assign({}, req.body);
        const category = yield (0, category_query_1.createCategory)(objectOfCategory);
        res.status(201).json(category);
    }
    catch (error) {
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
const getCategoriesByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
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
