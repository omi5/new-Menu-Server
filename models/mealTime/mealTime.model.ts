import { Schema, model } from "mongoose";
import { mealTimeInterface } from "../../interfaces/mealTime.Interface";

const mealTimeSchema = new Schema<mealTimeInterface>({
    restaurantId: {type: Number},
    mealTimeId: {type: Number},
    mealTimeName : {type: String, required: true},
    startDay: {type: Number, min: 0 , max: 6},
    endDay: {type: Number, min: 0 , max: 6},
    description: {type: String, required: true},
    startTime: {type: String, required: true},
    endTime: {type: String, required: true}

});

export const  mealTimeModel = model('mealTimes', mealTimeSchema);