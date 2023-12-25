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

const getMealTimeById = async (id: string)=>{
    const findOneMealTime = await mealTimeModel.findOne({_id: id}); //should also find by mealTimeId
    return findOneMealTime;
}

const updateMealTimeById = async (mealTimeId: string, mealTimeObject: mealTimeInterface)=>{
   //In here also try of update by  using mealtimeId 
    const updateMealTime = await mealTimeModel.findByIdAndUpdate(
        {_id: mealTimeId},
        {$set: mealTimeObject},
        {new: true}
    );
    return updateMealTime
}

const deleteMealTime =  async (id: string)=>{
    const removeMealTime = await mealTimeModel.findByIdAndDelete({_id: id}) //In here we also  use mealTime id in the future 
    return removeMealTime;
}

export {
    createMealTime,
    getAllMealTime,
    getMealTimeById,
    updateMealTimeById,
    deleteMealTime
}