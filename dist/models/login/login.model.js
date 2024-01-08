"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginModel = void 0;
const mongoose_1 = require("mongoose");
const loginSchema = new mongoose_1.Schema({
    email: { type: String },
    password: { type: String },
    service: { type: String, default: "menu builder" }
});
exports.loginModel = (0, mongoose_1.model)('loginDetails', loginSchema);
