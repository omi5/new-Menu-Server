import { recipeInterface } from "../../interfaces/recipe.interface";
import { recipeModel } from "./recipe.model";


const createRecipe = async(recipeObject: any)=>{
    const newRecipe = await recipeModel.create({...recipeObject})
    return newRecipe;
}

const getAllRecipeByRestaurantId = async(id: number)=>{
    const findAllItemsUnderRestaurant = await recipeModel.aggregate([
        {
            $match: {
                restaurantId: id 
            },
          },
          {
            $lookup: {
              from: 'recipes',
              localField: 'restaurantId',
              foreignField: 'restaurantId',
              as: 'listOfItems'
            },
          },
    ])

    return findAllItemsUnderRestaurant;
}

const getAllRecipe = async()=>{
    const allMenuItem = recipeModel.find();
    return allMenuItem;
}

const getRecipeById = async (id: number)=>{
    const singleMenuItem =  recipeModel.findOne({"recipeId" : id})
    return singleMenuItem;
}

const updateRecipeById = async(id: number, menuItemObject: recipeInterface)=>{
    const updatedMenuItewm = await recipeModel.findOneAndUpdate(
        {"recipeId": id},
        { ...menuItemObject},
        {new: true}
    );

    return updatedMenuItewm;
}
const deleteRecipe = async(id: number)=>{
    const removeMenuItem = await recipeModel.findOneAndDelete({"recipeId": id})
    return removeMenuItem;
}

export {
    createRecipe,
    getAllRecipeByRestaurantId,
    getAllRecipe,
    getRecipeById,
    updateRecipeById,
    deleteRecipe


}