"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealTimeModel = void 0;
const mongoose_1 = require("mongoose");
const mealTimeSchema = new mongoose_1.Schema({
    restaurantId: { type: Number },
    mealTimeId: { type: Number },
    mealTimeName: { type: String, required: true },
    startDay: { type: Number, min: 0, max: 6 },
    endDay: { type: Number, min: 0, max: 6 },
    description: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true }
});
exports.mealTimeModel = (0, mongoose_1.model)('mealTimes', mealTimeSchema);
