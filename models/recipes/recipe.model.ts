import { Schema, model } from "mongoose"
import { IngredientsInterface } from "../../interfaces/mealItem.interface"
import { getNextSequenceValue } from "../../utils/nextSequnece";


const ingredients = new Schema<IngredientsInterface>({
    id: Number,
    restaurantId: Number,
    ingredientName: String,
    unitOfStock: String,
    quantity: Number,
    costPerUnit: Number,
    caloriesPerUnit: Number
})

const recipeItemSchema = new Schema({
    restaurantId: Number,
    categoryId: String,
    recipeId: {type: Number},
    recipeName: String,
    recipeItemPortionSize: Number,
    recipeItemPreparationTime: Number,
    recipeItemCost: Number,
    recipeItemCalories: Number,
    recipeItemDescription: String,
    ingredients: [ingredients]
})


// Middleware to auto-increment recipeId
recipeItemSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.recipeId) {
        doc.recipeId = await getNextSequenceValue('recipeItemCounter');
    }
    next();
});


export const recipeModel = model('recipes',recipeItemSchema);