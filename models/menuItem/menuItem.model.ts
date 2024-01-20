import  { Schema,model } from "mongoose";
import { AddOptionInterface,NoOptionInterface,IngredientsInterface,PackagingInterface,ItemDietaryRestrictionsInterface,ItemInterface, AddonsIngredinetsInterface } from "../../interfaces/mealItem.interface";
import { getNextSequenceValue } from '../../utils/nextSequnece';



// const ItemDietaryRestrictions= new Schema<ItemDietaryRestrictionsInterface>({
//     allergens: String
// })
// const packaging = new Schema<PackagingInterface>({
//     dimensionLength: Number,
//     dimensionWidth: Number,
//     dimensionHeight: Number,
// })

const ingredients = new Schema<IngredientsInterface>({
        id: Number,
        restaurantId: Number,
		ingredientName: String,
		unitOfStock: String,
		quantity: Number,
		costPerUnit: Number,
		caloriesPerUnit: Number
})
const addons = new Schema<AddonsIngredinetsInterface>({
    id: Number,
    restaurantId: Number,
    ingredientName: String,
    unitOfStock: String,
    quantity: Number,
    costPerUnit: Number,
    caloriesPerUnit: Number,
    price: Number
})
const addOption = new Schema<AddOptionInterface>({
    // ingredientName: String,
    // quantity: Number,
    ingredients: addons
})

const noOption = new Schema<NoOptionInterface>({
    // ingredientName: String,
    // quantity: Number,
    ingredients: addons
})

const recipeItemSchema = new Schema({
    restaurantId: Number,
    categoryId: Number,
    recipeId: {type: Number},
    recipeName: String,
    recipeItemPortionSize: Number,
    recipeItemPreparationTime: Number,
    recipeItemCost: Number,
    recipeItemCalories: Number,
    recipeItemDescription: String,
    ingredients: [ingredients]
})

const itemSchema = new Schema<ItemInterface>({
    itemId: {type: Number},
	itemName: String,
	itemImage: String,
	itemDescription: String,
	itemPrice: Number,
	itemCalories: Number,
	timeOfDay: [String, String, String],
    itemProfileTastyTags: [],
	itemPortionSize: String,
	itemPreparationTime: Number,
	itemLastingTime: Number,
    typeOfFoods: [],
    itemPackingType: [],
	servingTemperature: Number,
	itemDietaryRestrictions: [],
    // itemPackingDimention: packaging,
    ingredients: {
        rawIngredients: [ingredients],
        recipes: [recipeItemSchema]

    },
    options: { add : [addons] , no: [addons]}

})



const menuItemSchema = new Schema({
    restaurantId : Number,
    categoryId: String,
    categoryName: String,
    mealTimeId: Number,
    item: itemSchema,
        
})



// Middleware to auto-increment ItemId
itemSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.itemId) {
        doc.itemId = await getNextSequenceValue('menuItemCounter');
    }
    next();
});

 export const menuItemModel = model('menuItems', menuItemSchema)