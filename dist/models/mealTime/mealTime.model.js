"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealTimeModel = void 0;
const mongoose_1 = require("mongoose");
const nextSequnece_1 = require("../../utils/nextSequnece");
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
// Middleware to auto-increment tableId
mealTimeSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const doc = this;
        if (!doc.mealTimeId) {
            doc.mealTimeId = yield (0, nextSequnece_1.getNextSequenceValue)('mealTimeCounter');
        }
        next();
    });
});
exports.mealTimeModel = (0, mongoose_1.model)('mealTimes', mealTimeSchema);
