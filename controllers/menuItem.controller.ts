import { Request, Response } from "express";
import { createMenuItem,getAllMenuItem,getMenuItemById,updateMenuItemById,deleteMenuItem,getAllMenuItemByRestaurantId } from "../models/menuItem/menuItem.query";


export const createMenuItemController = async(req: Request, res: Response)=>{
    try {
        const objectOfMenuItem = {... req.body};
        const menuItem = await createMenuItem(objectOfMenuItem);
        res.status(201).json(menuItem);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const getAllMenuItemController = async(req: Request, res:Response)=>{
    try {
        const allMenuItem = await getAllMenuItem();
        res.status(200).json(allMenuItem)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const getMenuItemByIdController = async(req: Request, res: Response)=>{
    try {
        const id: number = Number(req.params.id);
        const oneMenuItem = await getMenuItemById(id);
        res.status(200).json(oneMenuItem);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const updateMenuItemByIdController = async(req: Request, res: Response)=>{
    try {
        const id: number =Number(req.params.id);
        const menuItemObject = {...req.body}
        const updatedmemuItem = updateMenuItemById(id, menuItemObject);
        res.status(200).json(updatedmemuItem)
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }
}

export const deleteMenuItemController = async(req: Request, res: Response)=>{
    try {
        const id: number =Number(req.params.id);
        const deletedmenuItem = deleteMenuItem(id);
        res.json(deletedmenuItem);
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }
}


export const getAllMenuItemByRestaurantIdController = async(req: Request, res: Response)=>{
    try {
        const id: number = Number(req.params.id);
        const mealItems = await getAllMenuItemByRestaurantId(id);
        res.status(200).json(mealItems);
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }      

}