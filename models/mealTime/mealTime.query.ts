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
const getMealTimeById = async (id: string)=>{
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

const updateMealTimeById = async (id: string, menuTimeObject: mealTimeInterface)=>{
   //In here also try of update by  using mealtimeId 
    const updateMealTime = await mealTimeModel.findOneAndUpdate( {_id: id},{ ...menuTimeObject},{new: true});
    return updateMealTime;
}

const deleteMealTime =  async (id: string)=>{
    const removeMealTime = await mealTimeModel.findOneAndDelete({_id: id}) //In here we also  use mealTime id in the future 
    return removeMealTime;
}

//Find Mealtime By Using The ID

const getMealTimeByUsingId = async(id: string)=>{
     const findOneMealTime = await mealTimeModel.findOne({_id: id}); //should also find by mealTimeId
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