"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controllers/category.controller");
const router = express_1.default.Router();
router.get('/', category_controller_1.getAllCategoriesController);
router.get('/findOne/:id', category_controller_1.getcategoryByUsingCategoryIdController);
router.get('/:id', category_controller_1.getCategoriesByIdController);
router.post('/create', category_controller_1.createCategoryController);
router.put('/edit/:id', category_controller_1.updateCategoryByIdController);
router.delete('/delete/:id', category_controller_1.deleteCategoryController);
exports.default = router;
