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
exports.getMealTimeByUsingId = exports.deleteMealTime = exports.updateMealTimeById = exports.getMealTimeById = exports.getAllMealTime = exports.createMealTime = void 0;
const mealTime_model_1 = require("./mealTime.model");
const createMealTime = (mealTimeObject) => __awaiter(void 0, void 0, void 0, function* () {
    const newMealTime = yield mealTime_model_1.mealTimeModel.create(Object.assign({}, mealTimeObject));
    return newMealTime;
});
exports.createMealTime = createMealTime;
const getAllMealTime = () => __awaiter(void 0, void 0, void 0, function* () {
    const allMealTimes = mealTime_model_1.mealTimeModel.find();
    return allMealTimes;
});
exports.getAllMealTime = getAllMealTime;
//Find All items under this MealTime Schedule 
const getMealTimeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const findOneMealTime = await mealTimeModel.findOne({_id: id}); should also find by mealTimeId
    // return findOneMealTime;
    const findAllItemsUnderThisMealTime = yield mealTime_model_1.mealTimeModel.aggregate([
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
    ]);
    return findAllItemsUnderThisMealTime;
});
exports.getMealTimeById = getMealTimeById;
const updateMealTimeById = (id, menuTimeObject) => __awaiter(void 0, void 0, void 0, function* () {
    //In here also try of update by  using mealtimeId 
    const updateMealTime = yield mealTime_model_1.mealTimeModel.findOneAndUpdate({ mealTimeId: id }, Object.assign({}, menuTimeObject), { new: true });
    return updateMealTime;
});
exports.updateMealTimeById = updateMealTimeById;
const deleteMealTime = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const removeMealTime = yield mealTime_model_1.mealTimeModel.findOneAndDelete({ mealTimeId: id }); //In here we also  use mealTime id in the future 
    return removeMealTime;
});
exports.deleteMealTime = deleteMealTime;
//Find Mealtime By Using The ID
const getMealTimeByUsingId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const findOneMealTime = yield mealTime_model_1.mealTimeModel.findOne({ mealTimeId: id }); //should also find by mealTimeId
    return findOneMealTime;
});
exports.getMealTimeByUsingId = getMealTimeByUsingId;
