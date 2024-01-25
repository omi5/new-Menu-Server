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
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";
        // const externalServerUrl = "https://sak-skeleton-samiya-kazi.koyeb.app/inventory/ingredients/1";
        const externalServerUrl = "https://inventory-server-klzl.onrender.com/v1/ingredient/restaurant/1";
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
// router.get("/getAll",authMiddleware, async (req: AuthRequest, res: Response) => {
//   try {
//     const user = req.user;
//     const token = req.token;
//     console.log('user and token',user,token)
//     if (!user || !token) return res.status(401).send({ message: 'Unauthorized.' });
//     const restaurantId = user.employeeInformation.restaurantId;
//     const ingredient = await getIngredientFromInventory(token, restaurantId);
//     // const menu = await getMenuFromMenuBuilder();
//     res.send(ingredient);
// } catch (error: any) {
//     res.status(500);
//     res.json({message: error.message})
// }
// })
// router.get("/getAllPacking",authMiddleware, async (req: AuthRequest, res: Response) => {
//   try {
//     const user = req.user;
//     const token = req.token;
//     if (!user || !token) return res.status(401).send({ message: 'Unauthorized.' });
//     const restaurantId = user.employeeInformation.restaurantId;
//     const categories = await getDeliveryBoxFromInventory(token, restaurantId);
//     res.send(categories);
// } catch (error: any) {
//     res.status(500);
//     res.json({message: error.message})
// }
// })
router.get("/getAllPacking", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const externalServerUrl = "https://inventory-server-klzl.onrender.com/v1/deliveryBox/restaurant/1";
        // const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";
        const response = yield axios_1.default.get(externalServerUrl);
        const externalData = response.data;
        const selectedData = externalData.deliveryBoxes.map((deliveryBox) => ({
            id: deliveryBox.id,
            boxName: deliveryBox.boxName,
            currentStockQuantity: deliveryBox.currentStockQuantity,
            unitOfPrice: deliveryBox.unitOfPrice,
            costPerUnit: deliveryBox.costPerUnit,
            reorderPoint: deliveryBox.reorderPoint,
            unitOfDimentions: deliveryBox.unitOfDimentions,
            dimensions: deliveryBox.dimensions,
            weightLimit: deliveryBox.weightLimit,
            temperatureLimit: deliveryBox.temperatureLimit,
            waterproof: deliveryBox.waterproof,
            expectedStockForToday: deliveryBox.expectedStockForToday,
            expectedStockForTomorrow: deliveryBox.expectedStockForTomorrow,
            restaurantId: deliveryBox.restaurantId,
            createdAt: deliveryBox.createdAt,
            updatedAt: deliveryBox.updatedAt
        }));
        console.log(selectedData);
        res.send(selectedData);
    }
    catch (error) {
        console.error("Error fetching data:", error.message);
    }
}));
exports.default = router;
