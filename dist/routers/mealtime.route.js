"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mealTime_controller_1 = require("../controllers/mealTime.controller");
const router = express_1.default.Router();
router.get('/', mealTime_controller_1.getAllMealTimeController);
router.get('/:id', mealTime_controller_1.getMealTimeByIdController);
router.post('/create', mealTime_controller_1.createMealTimeController);
router.put('/edit/:id', mealTime_controller_1.updateMealTimeController);
router.delete('/delete/:id', mealTime_controller_1.deleteMealTimeController);
exports.default = router;
