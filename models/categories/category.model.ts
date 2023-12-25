import { Schema, model } from "mongoose";
import { categoryInterface } from "../../interfaces/category.interface";


const categorySchema = new Schema<categoryInterface>({
    restaurantId: {type: Number},
    categoryName: {type: String, required: true},
    categoryDescription: { type: String, required: true},
    categoryImage: {type: String}
});

export const categoryModel = model('categories', categorySchema);