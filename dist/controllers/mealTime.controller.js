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
exports.getMealTimeByUsingIdController = exports.deleteMealTimeController = exports.updateMealTimeController = exports.getMealTimeByIdController = exports.getAllMealTimeController = exports.createMealTimeController = void 0;
const mealTime_query_1 = require("../models/mealTime/mealTime.query");
const createMealTimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objectOfMealTime = Object.assign({}, req.body);
        const mealTime = yield (0, mealTime_query_1.createMealTime)(objectOfMealTime);
        res.status(201).json(mealTime);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createMealTimeController = createMealTimeController;
const getAllMealTimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMealTime = yield (0, mealTime_query_1.getAllMealTime)();
        res.status(200).json(allMealTime);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllMealTimeController = getAllMealTimeController;
//Find All items under the mealTIme Schedule
const getMealTimeByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const mealTime = yield (0, mealTime_query_1.getMealTimeById)(id);
        res.status(200).json(mealTime);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getMealTimeByIdController = getMealTimeByIdController;
// export const updateMealTimeController = async(req: Request, res: Response)=>{
//     try {
//         const id: number =Number(req.params.id);
//         const menuTimeObject = {...req.body}
//         const updatedmemuTime = updateMealTimeById(id,menuTimeObject );
//         res.status(200).json(updatedmemuTime)
//     } catch (error: any) {
//         res.status(500).json({error: error.message});
//     }
// }
const updateMealTimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const mealTimeObject = Object.assign({}, req.body);
        const updatedmealTime = yield (0, mealTime_query_1.updateMealTimeById)(id, mealTimeObject);
        res.status(200).json(updatedmealTime);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateMealTimeController = updateMealTimeController;
const deleteMealTimeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedmealTime = yield (0, mealTime_query_1.deleteMealTime)(id);
        res.json(deletedmealTime);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteMealTimeController = deleteMealTimeController;
//Find MealtimeBy Using id
const getMealTimeByUsingIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const mealtime = yield (0, mealTime_query_1.getMealTimeByUsingId)(id);
        res.status(200).json(mealtime);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getMealTimeByUsingIdController = getMealTimeByUsingIdController;
