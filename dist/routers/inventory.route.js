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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const axios_1 = __importDefault(require("axios"));
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";
        const response = yield axios_1.default.get(externalServerUrl);
        const externalData = response.data;
        const selectedData = externalData.ingredients.map((ingredient) => ({
            id: ingredient.id,
            ingredientName: ingredient.ingredientName,
            unitOfStock: ingredient.unitOfStock,
            costPerUnit: ingredient.costPerUnit,
            caloriesPerUnit: ingredient.caloriesPerUnit,
            liquid: ingredient.liquid,
        }));
        console.log(selectedData);
        res.send(selectedData);
    }
    catch (error) {
        console.error("Error fetching data:", error.message);
    }
}));
exports.default = router;
