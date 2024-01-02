import { menuItemModel } from "./menuItem.model";
import { AddOptionInterface,NoOptionInterface,IngredientsInterface,PackagingInterface,ItemDietaryRestrictionsInterface,ItemInterface } from "../../interfaces/mealItem.interface";


const createMenuItem = async(menuItemObject: ItemInterface)=>{
    const newMealItem = await menuItemModel.create({...menuItemObject});
    return newMealItem;
}

const getAllMenuItem = async()=>{
    const allMenuItem = menuItemModel.find();
    return allMenuItem;
}

const getMenuItemById = async (id: number)=>{
    const singleMenuItem =  menuItemModel.findOne({"item.itemId" : id})
    return singleMenuItem;
}

const updateMenuItemById = async(id: number, menuItemObject: ItemInterface)=>{
    const updatedMenuItewm = await menuItemModel.findOneAndUpdate(
        {"item.itemId": id},
        { ...menuItemObject},
        {new: true}
    );

    return updatedMenuItewm;
}

const deleteMenuItem = async(id: number)=>{
    const removeMenuItem = await menuItemModel.findOneAndDelete({"item.itemId": id})
    return removeMenuItem;
}


export{
    createMenuItem,
    getAllMenuItem,
    getMenuItemById,
    updateMenuItemById,
    deleteMenuItem
    
}

