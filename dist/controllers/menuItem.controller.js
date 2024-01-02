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
exports.deleteMenuItemController = exports.updateMenuItemByIdController = exports.getMenuItemByIdController = exports.getAllMenuItemController = exports.createMenuItemController = void 0;
const menuItem_query_1 = require("../models/menuItem/menuItem.query");
const createMenuItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objectOfMenuItem = Object.assign({}, req.body);
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
        const id = Number(req.params.id);
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
        const id = Number(req.params.id);
        const menuItemObject = Object.assign({}, req.body);
        const updatedmemuItem = (0, menuItem_query_1.updateMenuItemById)(id, menuItemObject);
        res.status(200).json(updatedmemuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateMenuItemByIdController = updateMenuItemByIdController;
const deleteMenuItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletedmenuItem = (0, menuItem_query_1.deleteMenuItem)(id);
        res.json(deletedmenuItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteMenuItemController = deleteMenuItemController;
