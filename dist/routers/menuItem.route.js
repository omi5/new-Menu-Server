"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menuItem_controller_1 = require("../controllers/menuItem.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.get('/', menuItem_controller_1.getAllMenuItemController);
router.get('/restaurant', auth_middleware_1.authMiddleware, menuItem_controller_1.getAllMenuItemByRestaurantIdController);
router.post('/get-menu-for-recommendation', menuItem_controller_1.getAllMenuItemByRestaurantIdForRecommendation);
router.get('/restaurant/:id', menuItem_controller_1.getAllMenuItemForMP);
router.get('/:id', menuItem_controller_1.getMenuItemByIdController);
router.post('/create', auth_middleware_1.authMiddleware, menuItem_controller_1.createMenuItemController);
router.put('/edit/:id', menuItem_controller_1.updateMenuItemByIdController);
router.delete('/delete/:id', menuItem_controller_1.deleteMenuItemController);
exports.default = router;
