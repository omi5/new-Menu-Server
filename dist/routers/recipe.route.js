"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipe_controller_1 = require("../controllers/recipe.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.get('/', recipe_controller_1.getAllRecipeController);
router.get('/:id', recipe_controller_1.getRecipeByIdController);
router.get('/restaurant/:id', auth_middleware_1.authMiddleware, recipe_controller_1.getAllRecipeByRestaurantIdController);
router.post('/create', auth_middleware_1.authMiddleware, recipe_controller_1.createRecipeController);
router.put('/edit/:id', recipe_controller_1.updateRecipeByIdController);
router.delete('/delete/:id', recipe_controller_1.deleteRecipeController);
exports.default = router;
