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
exports.getAllMenuItemForMP = exports.getAllMenuItemByRestaurantIdForRecommendation = exports.getAllMenuItemByRestaurantIdController = exports.deleteMenuItemController = exports.updateMenuItemByIdController = exports.getMenuItemByIdController = exports.getAllMenuItemController = exports.createMenuItemController = void 0;
const menuItem_query_1 = require("../models/menuItem/menuItem.query");
const createMenuItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const objectOfMenuItem = req.body;
        const resId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.employeeInformation.restaurantId;
        if (resId) {
            objectOfMenuItem.restaurantId = resId;
        }
        else {
            // Handle the case when restaurantId is not available
            console.error("Restaurant ID is not available.");
        }
        // if(objectOfMenuItem.Array)
        // console.log('objectOfMenuItem======',objectOfMenuItem);
        let menuItems = [];
        if (Array.isArray(objectOfMenuItem)) {
            objectOfMenuItem.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                const menuItem = yield (0, menuItem_query_1.createMenuItem)(item);
                menuItems.push(menuItem);
            }));
            res.status(201).json(menuItems);
        }
        const menuItem = yield (0, menuItem_query_1.createMenuItem)(objectOfMenuItem);
        res.status(201).json(menuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createMenuItemController = createMenuItemController;
const getAllMenuItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMenuItem = yield (0, menuItem_query_1.getAllMenuItem)();
        res.status(200).json(allMenuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllMenuItemController = getAllMenuItemController;
const getMenuItemByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const oneMenuItem = yield (0, menuItem_query_1.getMenuItemById)(id);
        res.status(200).json(oneMenuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getMenuItemByIdController = getMenuItemByIdController;
const updateMenuItemByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const menuItemObject = Object.assign({}, req.body);
        const updatedmemuItem = yield (0, menuItem_query_1.updateMenuItemById)(id, menuItemObject);
        console.log("updated item ====", updatedmemuItem);
        res.status(200).send(updatedmemuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateMenuItemByIdController = updateMenuItemByIdController;
const deleteMenuItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedmenuItem = (0, menuItem_query_1.deleteMenuItem)(id);
        res.json(deletedmenuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteMenuItemController = deleteMenuItemController;
const getAllMenuItemByRestaurantIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // const id: number = Number(req.params.id);
        const resId = Number((_b = req.user) === null || _b === void 0 ? void 0 : _b.employeeInformation.restaurantId);
        const mealItems = yield (0, menuItem_query_1.getAllMenuItemByRestaurantId)(resId);
        res.status(200).json(mealItems);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllMenuItemByRestaurantIdController = getAllMenuItemByRestaurantIdController;
const getAllMenuItemByRestaurantIdForRecommendation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recommendationArray = req.body.ids;
        // let mealItems:any
        // let listOfItems:any;
        // console.log('Recomm Array is: ', recommendationArray);
        let menuItemForRecommendationEngine = [];
        let promises = recommendationArray.map((restaurantId) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('res', restaurantId);
            console.log('res type is: ', typeof restaurantId);
            const mealItems = yield (0, menuItem_query_1.getAllMenuItemByRestaurantId)(restaurantId);
            console.log('mealItems', mealItems);
            //  const listOfItemsForRestaurant = mealItems.map((item: any) => item.listOfItems)
            let items = mealItems.map(item => {
                var _a, _b;
                return {
                    _id: item._id,
                    itemName: (_a = item.item) === null || _a === void 0 ? void 0 : _a.itemName,
                    itemProfileTastyTags: (_b = item.item) === null || _b === void 0 ? void 0 : _b.itemProfileTastyTags
                };
            });
            // console.log('items',items);
            menuItemForRecommendationEngine.push({
                restaurantId: restaurantId,
                items: items
            });
            return items;
        }));
        const result = yield Promise.all(promises);
        console.log('recommendation', menuItemForRecommendationEngine);
        res.status(200).json(menuItemForRecommendationEngine);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllMenuItemByRestaurantIdForRecommendation = getAllMenuItemByRestaurantIdForRecommendation;
const getAllMenuItemForMP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        // const resId: number = Number(req.user?.employeeInformation.restaurantId);
        const mealItems = yield (0, menuItem_query_1.getAllMenuItemByRestaurantId)(id);
        res.status(200).json(mealItems);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllMenuItemForMP = getAllMenuItemForMP;
