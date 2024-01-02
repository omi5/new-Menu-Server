import { categoryModel } from "./category.model";
import { categoryInterface } from "../../interfaces/category.interface";

const createCategory = async(categoryObject: categoryInterface)=>{
    const newCategory = await categoryModel.create({...categoryObject})
    return newCategory;
}

const getAllCategories = async()=>{
    const categories = await categoryModel.find();
    return categories;
}

const getcategoryByUsingCategoryId = async(id:number)=>{
    const category =await categoryModel.findOne({categoryId : id});
    return category;
}
//find filter category items using category ID
const getCategoriesById = async(id: number)=>{
    // findOne({_id : id});
    const category = await categoryModel.aggregate([
        {
            $match: {
                categoryId: id 
            },
          },
          {
            $lookup: {
              from: 'menuitems',
              localField: 'categoryId',
              foreignField: 'categoryId',
              as: 'listOfItems'
            },
          },
    ])
    return category;
}

const updateCategoryById = async(id: number, categoryObject: categoryInterface)=>{
    const updateCategory = await categoryModel.find({categoryId: id},{ ...categoryObject},{new: true});
    return updateCategory;
}

const deleteCategory = async(id: number)=>{
    const removeCategory = await categoryModel.findOneAndDelete({categoryId: id});
    return removeCategory;
}

export {
    createCategory,
    getAllCategories,
    getCategoriesById,
    updateCategoryById,
    deleteCategory,
    getcategoryByUsingCategoryId
    
}