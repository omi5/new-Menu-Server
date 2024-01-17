import { inventoryIngredientModel } from "./inventory.model";
import { inventoryIngredient } from "../../interfaces/inventory.interface";

const getAllIngredients = async()=>{
    const ingredients = await inventoryIngredientModel.find();
    return ingredients;
}