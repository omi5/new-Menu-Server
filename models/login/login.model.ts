import { Schema, model } from "mongoose";
import { loginInterface } from "../../interfaces/login.interface";

const loginSchema = new Schema<loginInterface>({
    email: {type:String},
    password: {type:String},
    service: {type:String, default: "menu builder"}
})

export const loginModel = model('loginDetails',loginSchema);