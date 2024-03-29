import { NextFunction, Response } from "express";
import { getUserFromToken } from "../services/skeleton.service";
import { AuthRequest } from "../interfaces/authRequest.interface";

export async function authMiddleware (req: AuthRequest, res: Response, next: NextFunction) {
  try {
    console.log("check hit");
    
    const authHeaders = req.headers["authorization"];
    console.log('auth===',authHeaders);
    if (!authHeaders) return res.status(401).send({ message: "Unauthorized" });
    
    const check = await getUserFromToken(authHeaders);
    console.log('check===',check);
    if (check) {
      req.user = check.user;
      console.log('check====',check);
      
      req.token = authHeaders;
      next();
    } else res.status(403).send({ message: 'Forbidden.' });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: 'Unauthorized' });
  }
}