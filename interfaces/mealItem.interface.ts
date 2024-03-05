export interface PackagingInterface {
    dimensionLength?: number,
    dimensionWidth?: number,
    dimensionHeight?: number,
}

export interface IngredientsInterface {
    id: number, //raw item
    restaurantId: number,
	ingredientName: string,
	unitOfStock: string,
	quantity: number,
	costPerUnit: number,
    unitOfPrice: string;
	caloriesPerUnit: number

    //menuItem
}
export type AddonsIngredinetsInterface = IngredientsInterface & {
    price: string,
    
}
export interface AddOptionInterface {
    // ingredientName: string,
    // quantity?: number,
    ingredients: IngredientsInterface[]
}

export interface NoOptionInterface {
    // ingredientName: string,
    // quantity?: number,
    ingredients: IngredientsInterface[]
}

export interface ItemDietaryRestrictionsInterface{
    allergens?: string
}

export interface ItemInterface {
	
    itemId: number,
    itemName: string,
    availableInPos: boolean,
    availableInMarketPlace: boolean,
	itemImage: string,
	itemDescription?: string,
	itemPrice: number,
	itemCalories: number,
	timeOfDay: [string, string, string],
    itemProfileTastyTags: string[],
    typeOfFoods: string,
	itemPortionSize: string,
	itemPreparationTime: number,
	itemLastingTime: number,
    itemPackingType: number,
	servingTemperature: number,
	itemDietaryRestrictions: ItemDietaryRestrictionsInterface[],
    itemPackingDimention: PackagingInterface[],
    ingredients: IngredientsInterface[],
    options: { add : AddOptionInterface[] , no: NoOptionInterface[]}
}