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
exports.getAllMenuItemByRestaurantId = exports.deleteMenuItem = exports.updateMenuItemById = exports.getMenuItemById = exports.getAllMenuItem = exports.createMenuItem = void 0;
const menuItem_model_1 = require("./menuItem.model");
const createMenuItem = (menuItemObject) => __awaiter(void 0, void 0, void 0, function* () {
    const newMealItem = yield menuItem_model_1.menuItemModel.create(Object.assign({}, menuItemObject));
    return newMealItem;
});
exports.createMenuItem = createMenuItem;
const getAllMenuItemByRestaurantId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const findAllItemsUnderRestaurant = await menuItemModel.aggregate([
    //     {
    //         $match: {
    //             restaurantId: id 
    //         },
    //       },
    //       {
    //         $lookup: {
    //           from: 'menuitems',
    //           localField: 'restaurantId',
    //           foreignField: 'restaurantId',
    //           as: 'listOfItems'
    //         },
    //       },
    // ])
    try {
        const listOfMenuItems = yield menuItem_model_1.menuItemModel.find({ restaurantId: id });
        return listOfMenuItems;
    }
    catch (error) {
        console.error('Error in getAllMenuItemByRestaurantId:', error);
        throw error; // Rethrow the error for better debugging
    }
});
exports.getAllMenuItemByRestaurantId = getAllMenuItemByRestaurantId;
const getAllMenuItem = () => __awaiter(void 0, void 0, void 0, function* () {
    const allMenuItem = menuItem_model_1.menuItemModel.find();
    return allMenuItem;
});
exports.getAllMenuItem = getAllMenuItem;
const getMenuItemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleMenuItem = menuItem_model_1.menuItemModel.findOne({ _id: id });
    return singleMenuItem;
});
exports.getMenuItemById = getMenuItemById;
const updateMenuItemById = (id, menuItemObject) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMenuItewm = yield menuItem_model_1.menuItemModel.findOneAndUpdate({ _id: id }, Object.assign({}, menuItemObject), { new: true });
    console.log('coming from bacend menu ====', updatedMenuItewm);
    return updatedMenuItewm;
});
exports.updateMenuItemById = updateMenuItemById;
const deleteMenuItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const removeMenuItem = yield menuItem_model_1.menuItemModel.findOneAndDelete({ _id: id });
    return removeMenuItem;
});
exports.deleteMenuItem = deleteMenuItem;
