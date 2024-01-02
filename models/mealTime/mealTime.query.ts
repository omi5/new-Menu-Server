import { mealTimeModel } from "./mealTime.model";
import { mealTimeInterface } from "../../interfaces/mealTime.Interface";


const createMealTime = async (mealTimeObject: mealTimeInterface)=>{
    const newMealTime = await mealTimeModel.create({...mealTimeObject})
    return newMealTime;
}

const getAllMealTime = async ()=>{
    const allMealTimes = mealTimeModel.find();
    return allMealTimes;
}


//Find All items under this MealTime Schedule 
const getMealTimeById = async (id: number)=>{
    // const findOneMealTime = await mealTimeModel.findOne({_id: id}); should also find by mealTimeId
    // return findOneMealTime;

    const findAllItemsUnderThisMealTime = await mealTimeModel.aggregate([
        {
            $match: {
                mealTimeId: id 
            },
          },
          {
            $lookup: {
              from: 'menuitems',
              localField: 'mealTimeId',
              foreignField: 'mealTimeId',
              as: 'listOfItems'
            },
          },
    ])

    return  findAllItemsUnderThisMealTime;
}

const updateMealTimeById = async (id: number, menuTimeObject: mealTimeInterface)=>{
   //In here also try of update by  using mealtimeId 
    const updateMealTime = await mealTimeModel.findOneAndUpdate( {mealTimeId: id},{ ...menuTimeObject},{new: true});
    return updateMealTime;
}

const deleteMealTime =  async (id: number)=>{
    const removeMealTime = await mealTimeModel.findOneAndDelete({mealTimeId: id}) //In here we also  use mealTime id in the future 
    return removeMealTime;
}

//Find Mealtime By Using The ID

const getMealTimeByUsingId = async(id: number)=>{
     const findOneMealTime = await mealTimeModel.findOne({mealTimeId: id}); //should also find by mealTimeId
    return findOneMealTime;
}

export {
    createMealTime,
    getAllMealTime,
    getMealTimeById,
    updateMealTimeById,
    deleteMealTime,
    getMealTimeByUsingId
}