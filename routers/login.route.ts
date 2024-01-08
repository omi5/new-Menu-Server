import express, { Router } from 'express';
import { createLogin } from '../models/login/login.query';

const router = express.Router()

router.post('/create',createLogin);



export  default  router;