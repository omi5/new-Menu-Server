import { Request, Response } from "express";
import {getAllCategoryByRestaurantId,createCategory,getAllCategories,getCategoriesById,updateCategoryById,deleteCategory, getcategoryByUsingCategoryId } from '../models/categories/category.query'


export const createCategoryController = async(req: Request, res: Response)=>{
    try {
        const objectOfCategory = {...req.body};
        const category = await createCategory(objectOfCategory);
        res.status(201).json(category)
    } catch (error) {
        if(error instanceof Error)
        res.status(500).json({error: error.message});

    }
}

export const getAllCategoriesController = async(req: Request, res: Response)=>{
    try {
        const allCategories = await getAllCategories();
        res.status(200).json(allCategories); 
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}
//Find all Items Under the category
export const getCategoriesByIdController = async(req: Request, res: Response)=>{
    try {
        const id = parseInt( req.params.id);
        const categories = await getCategoriesById(id);
        res.status(200).json(categories)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const updateCategoryByIdController = async(req: Request, res: Response)=>{
    try {
        const id =req.params.id;
        const categoryObject = {... req.body};
        const updatedCategory = await updateCategoryById(id, categoryObject);
        res.json(updatedCategory);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const deleteCategoryController = async(req: Request , res: Response)=>{
    try {
        const id: string =  req.params.id;
        const deletedCategory = await deleteCategory(id)
        res.json(deletedCategory) 
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

//Find All categories

export const getcategoryByUsingCategoryIdController = async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        const category = await getcategoryByUsingCategoryId(id);
        res.status(200).json(category)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}



export const getAllCategoryByRestaurantIdController = async(req: Request, res: Response)=>{
    try {
        const id: number = Number(req.params.id);
        const category = await getAllCategoryByRestaurantId(id);
        res.status(200).json(category)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}