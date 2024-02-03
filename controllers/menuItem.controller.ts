import { Request, Response } from "express";
import { createMenuItem,getAllMenuItem,getMenuItemById,updateMenuItemById,deleteMenuItem,getAllMenuItemByRestaurantId } from "../models/menuItem/menuItem.query";
import { AuthRequest } from "../interfaces/authRequest.interface";


export const createMenuItemController = async(req: AuthRequest, res: Response)=>{
    try {
        const objectOfMenuItem = req.body;
        const resId = req.user?.employeeInformation.restaurantId
        if (resId) {
            objectOfMenuItem.restaurantId = resId;
          } else {
            // Handle the case when restaurantId is not available
            console.error("Restaurant ID is not available.");
          }
        // if(objectOfMenuItem.Array)
        // console.log('objectOfMenuItem======',objectOfMenuItem);
        let menuItems: any[]=[]
        if (Array.isArray(objectOfMenuItem)){
            objectOfMenuItem.map(async(item)=>{
                const menuItem = await createMenuItem(item)
                menuItems.push(menuItem)
            })
            res.status(201).json(menuItems);
        }
        
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
        const id: string = req.params.id;
        const oneMenuItem = await getMenuItemById(id);
        res.status(200).json(oneMenuItem);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const updateMenuItemByIdController = async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        const menuItemObject = {...req.body}
    
        
        const updatedmemuItem = await updateMenuItemById(id, menuItemObject);
        console.log("updated item ====",updatedmemuItem);
        
        
        res.status(200).send(updatedmemuItem)
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }
}

export const deleteMenuItemController = async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        const deletedmenuItem = deleteMenuItem(id);
        res.json(deletedmenuItem);
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }
}


export const getAllMenuItemByRestaurantIdController = async(req: AuthRequest, res: Response)=>{
    try {
        // const id: number = Number(req.params.id);
        const resId: number = Number(req.user?.employeeInformation.restaurantId);
        const mealItems = await getAllMenuItemByRestaurantId(resId);
        res.status(200).json(mealItems);
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }      

}