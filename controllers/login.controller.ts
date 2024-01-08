import { createLogin } from "../models/login/login.query";
import { Request, Response } from "express";

export const createLoginController = async(req: Request, res:Response)=>{
    try {
        const loginData = {...req.body};
        const login = await createLogin(loginData)
        res.status(200).json(login);
    } catch (error) {
        if(error instanceof Error)
        res.status(500).json({error: error.message});
    }
}