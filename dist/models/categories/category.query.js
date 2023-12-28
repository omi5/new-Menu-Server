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
exports.deleteCategory = exports.updateCategoryById = exports.getCategoriesById = exports.getAllCategories = exports.createCategory = void 0;
const category_model_1 = require("./category.model");
const createCategory = (categoryObject) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = yield category_model_1.categoryModel.create(Object.assign({}, categoryObject));
    return newCategory;
});
exports.createCategory = createCategory;
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_model_1.categoryModel.find();
    return categories;
});
exports.getAllCategories = getAllCategories;
//find filter category items using category ID
const getCategoriesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // findOne({_id : id});
    const category = yield category_model_1.categoryModel.aggregate([
        {
            $match: {
                categoryId: id
            },
        },
        {
            $lookup: {
                from: 'menuitems',
                localField: 'categoryId',
                foreignField: 'categoryId',
                as: 'listOfItems'
            },
        },
    ]);
    return category;
});
exports.getCategoriesById = getCategoriesById;
const updateCategoryById = (id, categoryObject) => __awaiter(void 0, void 0, void 0, function* () {
    const updateCategory = yield category_model_1.categoryModel.findByIdAndUpdate({ _id: id }, { $set: { categoryObject } }, { new: true });
    return updateCategory;
});
exports.updateCategoryById = updateCategoryById;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const removeCategory = yield category_model_1.categoryModel.findByIdAndDelete({ _id: id });
    return removeCategory;
});
exports.deleteCategory = deleteCategory;
