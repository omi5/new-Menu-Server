import { Request, Response } from "express";
import { createRecipe, getAllRecipeByRestaurantId, getAllRecipe, getRecipeById, updateRecipeById,deleteRecipe } from "../models/recipes/recipe.query";



export const createRecipeController = async(req: Request, res: Response)=>{
    try {
        const objectOfRecipe = {...req.body}
        const newRecipe = await createRecipe(objectOfRecipe);
        res.status(201).json(newRecipe)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const getAllRecipeController =async (req: Request, res: Response) => {
    try {
        const allRecipe = await getAllRecipe()
        res.status(200).json(allRecipe)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const getRecipeByIdController = async(req: Request, res:Response)=>{
    try {
        const id =Number(req.params.id);
        const oneRecipe = await getRecipeById(id);
        res.status(200).json(oneRecipe);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}

export const updateRecipeByIdController = async(req: Request, res: Response)=>{
    try {
        const id = Number(req.params.id);
        const objectOfRecipe = {...req.body}
        const updatedRecipe = await updateRecipeById(id, objectOfRecipe);
        res.status(200).json(updatedRecipe)
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }
}

export const deleteRecipeController = async (req: Request, res: Response)=>{
    try {
        const id = Number(req.params.id)
        const deletedRecipe =await deleteRecipe(id);
        res.status(200).json(deleteRecipe);
    } catch (error : any) {
        res.status(500).json({error: error.message});
        
    }  
}

export const getAllRecipeByRestaurantIdController = async(req: Request, res: Response)=>{
    try {
        const id: number = Number(req.params.id);
        const recipes = await getAllRecipeByRestaurantId(id);
        res.status(200).json(recipes);
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }      

}