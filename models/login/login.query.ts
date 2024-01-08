import { loginModel } from "./login.model";
import { loginInterface } from "../../interfaces/login.interface";

const createLogin = async(loginModelObject: loginInterface)=>{
    const login = await loginModel.create({...loginModelObject});
    return login;
}

export {createLogin};