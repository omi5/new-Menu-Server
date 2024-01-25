import express, { Request, Response, Router } from 'express';
import { AuthRequest } from '../interfaces/authRequest.interface';
import {getIngredientFromInventory , getDeliveryBoxFromInventory} from '../services/skeleton.service'
const router = express.Router()
import { authMiddleware } from '../middleware/auth.middleware';
import axios from 'axios';

const cors = require('cors');
const app = express();

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


router.get("/getAll",authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    const token = req.token;
    if (!user || !token) return res.status(401).send({ message: 'Unauthorized.' });
    const restaurantId = user.employeeInformation.restaurantId;

    const ingredient = await getIngredientFromInventory(token, restaurantId);
    // const menu = await getMenuFromMenuBuilder();
    res.send(ingredient);
} catch (error: any) {
    res.status(500);
    res.json({message: error.message})
}

})

router.get("/getAllPacking",authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    const token = req.token;
    if (!user || !token) return res.status(401).send({ message: 'Unauthorized.' });
    const restaurantId = user.employeeInformation.restaurantId;

    const categories = await getDeliveryBoxFromInventory(token, restaurantId);
    res.send(categories);
} catch (error: any) {
    res.status(500);
    res.json({message: error.message})
}

})










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

export default  router;