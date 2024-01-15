import { Request, Response } from "express";
import {createMealTime, getAllMealTime,getMealTimeById,updateMealTimeById, deleteMealTime, getMealTimeByUsingId  } from "../models/mealTime/mealTime.query"; 

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

//Find All items under the mealTIme Schedule
export const getMealTimeByIdController = async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        const mealTime = await getMealTimeById(id);
        res.status(200).json(mealTime);
    } catch (error: any) {
        res.status(500).json({error: error.message});
        
    }      

}

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

export const updateMealTimeController = async( req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        const mealTimeObject = {...req.body};
        const updatedmealTime = await updateMealTimeById(id, mealTimeObject);
        res.status(200).json(updatedmealTime);
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

//Find MealtimeBy Using id

export const getMealTimeByUsingIdController = async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        const mealtime = await getMealTimeByUsingId(id);
        res.status(200).json(mealtime);

    } catch (error: any) {
        res.status(500).json({error: error.message});
    }
}