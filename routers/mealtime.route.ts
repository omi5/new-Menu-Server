import express  from "express";
import {createMealTimeController,getAllMealTimeController,getMealTimeByIdController,updateMealTimeController,deleteMealTimeController} from '../controllers/mealTime.controller' 

const router = express.Router()

router.get('/', getAllMealTimeController);
router.get('/:id',getMealTimeByIdController);
router.post('/create', createMealTimeController);
router.put('/edit/:id',updateMealTimeController);
router.delete('/delete/:id',deleteMealTimeController)

export default router;