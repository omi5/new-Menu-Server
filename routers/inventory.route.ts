import express, { Request, Response, Router } from 'express';
const router = express.Router()
import axios from 'axios';

const cors = require('cors');
const app = express();

app.use(cors());

router.get("/getAll", async (req: Request, res: Response) => {
  try {
   
    const externalServerUrl = "https://inventory-server-klzl.onrender.com/v1/ingredient/restaurant/1";
    // const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";

    const response = await axios.get(externalServerUrl);
    const externalData = response.data;
   
    
    const selectedData = externalData.ingredients.map((ingredient: any) => ({
      id: ingredient.id,
      ingredientName: ingredient.ingredientName,
      unitOfStock: ingredient.unitOfStock,
      costPerUnit: ingredient.costPerUnit , 
      caloriesPerUnit: ingredient.caloriesPerUnit,
      liquid: ingredient.liquid,
    }));
console.log(selectedData);

    res.send( selectedData);
  } catch (error: any) {

    console.error("Error fetching data:", error.message);
   
  }
});
router.get("/getAllPacking", async (req: Request, res: Response) => {
  try {
   
    const externalServerUrl = "https://inventory-server-klzl.onrender.com/v1/deliveryBox/restaurant/1"; 
    // const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";

    const response = await axios.get(externalServerUrl);
    const externalData = response.data;
   
    
    const selectedData = externalData.deliveryBoxes.map((deliveryBox: any) => ({
      id: deliveryBox.id,
      boxName: deliveryBox.ingredientName,
      // unitOfStock: ingredient.unitOfStock,
      // costPerUnit: ingredient.costPerUnit , 
      // caloriesPerUnit: ingredient.caloriesPerUnit,
      // liquid: ingredient.liquid,
    }));
console.log(selectedData);

    res.send( selectedData);
  } catch (error: any) {

    console.error("Error fetching data:", error.message);
   
  }
});

export default  router;