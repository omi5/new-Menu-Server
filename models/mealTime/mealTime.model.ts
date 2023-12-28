import { Schema, model } from "mongoose";
import { mealTimeInterface } from "../../interfaces/mealTime.Interface";
import { getNextSequenceValue } from '../../utils/nextSequnece';


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

// Middleware to auto-increment tableId
mealTimeSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.mealTimeId) {
        doc.mealTimeId = await getNextSequenceValue('mealTimeCounter');
    }
    next();
});

export const  mealTimeModel = model('mealTimes', mealTimeSchema);