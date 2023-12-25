import { Request, Response } from "express";
import {createMealTime, getAllMealTime,getMealTimeById,updateMealTimeById, deleteMealTime  } from "../models/mealTime/mealTime.query"; 

export const createMealTimeController = async(req: Request, res: Response)=>{
    try {
        const objectOfMealTime = {...req.body};
        const mealTime = await createMealTime(objectOfMealTime);
        res.status(201).json(mealTime); 

    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const getAllMealTimeController = async(req: Request, res: Response)=>{
    try {
        const allMealTime = await getAllMealTime();
        res.status(200).json(allMealTime);
    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}

export const getMealTimeByIdController = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id;
        const mealTime = await getMealTimeById(id);
        res.status(200).json(mealTime);
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }      

}

export const updateMealTimeController = async( req: Request, res: Response)=>{
    try {
        const id = req.params.id;
        const mealTimeObject = {...req.body};
        const updatedmealTime = await updateMealTimeById(id, mealTimeObject);
        res.json(updatedmealTime)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    } 
}

export const deleteMealTimeController = async( req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        const deletedmealTime = await deleteMealTime(id);
        res.json(deletedmealTime)
    } catch (error: any) {
        res.status(500).json({error: error.message});
    } 
}