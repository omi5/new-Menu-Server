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
const skeleton_service_1 = require("../services/skeleton.service");
const router = express_1.default.Router();
const auth_middleware_1 = require("../middleware/auth.middleware");
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
// router.get("/getAll", async (req: Request, res: Response) => {
//   // try {
//     // const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";
// //     const externalServerUrl = "https://sak-skeleton-samiya-kazi.koyeb.app/inventory/ingredients/1";
// //     const response = await axios.get(externalServerUrl);
// //     const externalData = response.data;
// //     const selectedData = externalData.ingredients.map((ingredient: any) => ({
// //       id: ingredient.id,
// //       ingredientName: ingredient.ingredientName,
// //       unitOfStock: ingredient.unitOfStock,
// //       costPerUnit: ingredient.costPerUnit , 
// //       caloriesPerUnit: ingredient.caloriesPerUnit,
// //       liquid: ingredient.liquid,
// //     }));
// // console.log(selectedData);
//   //   res.send( selectedData);
//   // } catch (error: any) {
//   //   console.error("Error fetching data:", error.message);
//   }
router.get("/getAll", auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const token = req.token;
        console.log('user and token', user, token);
        if (!user || !token)
            return res.status(401).send({ message: 'Unauthorized.' });
        const restaurantId = user.employeeInformation.restaurantId;
        const ingredient = yield (0, skeleton_service_1.getIngredientFromInventory)(token, restaurantId);
        // const menu = await getMenuFromMenuBuilder();
        res.send(ingredient);
    }
    catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}));
router.get("/getAllPacking", auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const token = req.token;
        if (!user || !token)
            return res.status(401).send({ message: 'Unauthorized.' });
        const restaurantId = user.employeeInformation.restaurantId;
        const categories = yield (0, skeleton_service_1.getDeliveryBoxFromInventory)(token, restaurantId);
        res.send(categories);
    }
    catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}));
// router.get("/getAllPacking", async (req: Request, res: Response) => {
//   try {
//     const externalServerUrl = "https://sak-skeleton-samiya-kazi.koyeb.app/inventory/delivery-box/1 "; 
//     // const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";
//     const response = await axios.get(externalServerUrl , );
//     const externalData = response.data;
//     const selectedData = externalData.deliveryBoxes.map((deliveryBox: any) => ({
//       id: deliveryBox.id,
//       boxName: deliveryBox.boxName,
//       currentStockQuantity: deliveryBox.currentStockQuantity,
//       unitOfPrice: deliveryBox.unitOfPrice,
//       costPerUnit: deliveryBox.costPerUnit,
//       reorderPoint: deliveryBox.reorderPoint,
//       unitOfDimentions: deliveryBox.unitOfDimentions,
//       dimensions: deliveryBox.dimensions,
//       weightLimit: deliveryBox.weightLimit,
//       temperatureLimit: deliveryBox.temperatureLimit,
//       waterproof: deliveryBox.waterproof,
//       expectedStockForToday: deliveryBox.expectedStockForToday,
//       expectedStockForTomorrow: deliveryBox.expectedStockForTomorrow,
//       restaurantId: deliveryBox.restaurantId,
//       createdAt: deliveryBox.createdAt,
//       updatedAt: deliveryBox.updatedAt
//     }));
// console.log(selectedData);
//     res.send( selectedData);
//   } catch (error: any) {
//     console.error("Error fetching data:", error.message);
//   }
// });
exports.default = router;
