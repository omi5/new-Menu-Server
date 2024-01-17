import express, { Request, Response, Router } from 'express';
const router = express.Router()
import axios from 'axios';

router.get("/getAll", async (req: Request, res: Response) => {
  try {
   
    const externalServerUrl = "https://equal-monarch-early.ngrok-free.app/v1/ingredient/restaurant/1";

    const response = await axios.get(externalServerUrl);
    const externalData = response.data;
   
    
    const selectedData = externalData.ingredients.map((ingredient: any) => ({
      id: ingredient.id,
      ingredientName: ingredient.ingredientName,
      unitOfStock: ingredient.unitOfStock,
      costPerUnit: ingredient.costPerUnit * 100, 
      caloriesPerUnit: ingredient.caloriesPerUnit,
      liquid: ingredient.liquid,
    }));
console.log(selectedData);

    res.send( selectedData);
  } catch (error: any) {

    console.error("Error fetching data:", error.message);
   
  }
});

export default  router;