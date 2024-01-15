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

const getcategoryByUsingCategoryId = async(id:string)=>{
    const category =await categoryModel.findOne({_id : id});
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

const updateCategoryById = async(id: string, categoryObject: categoryInterface)=>{
    const updateCategory = await categoryModel.findByIdAndUpdate({_id: id},{ ...categoryObject},{new: true});
    return updateCategory;
}

const deleteCategory = async(id: string)=>{
    const removeCategory = await categoryModel.findOneAndDelete({_id: id});
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