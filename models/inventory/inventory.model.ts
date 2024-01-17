import { Schema, model } from "mongoose";
import { inventoryIngredient } from "../../interfaces/inventory.interface";

const inventoryIngredient = new Schema<inventoryIngredient>({
    id: {type: Number},
    ingredientName: {type: String},
    unitOfStock: {type: String},
    costPerUnit: {type: Number},
    caloriesPerUnit: {type: Number},
    liquid: {type: String}
})

export const inventoryIngredientModel = model('inventoryIngredient',inventoryIngredient);