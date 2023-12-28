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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const category_route_1 = __importDefault(require("./routers/category.route"));
const mealtime_route_1 = __importDefault(require("./routers/mealtime.route"));
const menuItem_route_1 = __importDefault(require("./routers/menuItem.route"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/category', category_route_1.default);
app.use('/mealtime', mealtime_route_1.default);
app.use('/menuItem', menuItem_route_1.default);
(function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://localhost:27017/menuBuilder1');
        console.log('Connected to DB');
        app.listen(port, () => {
            console.log(`Server is listening at http://127.0.0.1:${port}`);
        });
    });
})();
