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

const getMenuItemById = async (id: string)=>{
    const singleMenuItem =  menuItemModel.findOne({_id : id})
    return singleMenuItem;
}

const updateMenuItemById = async(id: string, menuItemObject: ItemInterface)=>{
    const updatedMenuItewm = await menuItemModel.findByIdAndUpdate(
        {_id: id},
        {$set: menuItemObject},
        {new: true}
    );

    return updatedMenuItewm;
}

const deleteMenuItem = async(id: string)=>{
    const removeMenuItem = await menuItemModel.findByIdAndDelete({_id: id})
    return removeMenuItem;
}


export{
    createMenuItem,
    getAllMenuItem,
    getMenuItemById,
    updateMenuItemById,
    deleteMenuItem
    
}

