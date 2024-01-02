import express  from "express";
import {createMealTimeController,getAllMealTimeController,getMealTimeByIdController,updateMealTimeController,deleteMealTimeController, getMealTimeByUsingIdController} from '../controllers/mealTime.controller' 

const router = express.Router()

router.get('/', getAllMealTimeController);
router.get('/findOne/:id', getMealTimeByUsingIdController);
router.get('/:id',getMealTimeByIdController);
router.post('/create', createMealTimeController);
router.put('/edit/:id',updateMealTimeController);
router.delete('/delete/:id',deleteMealTimeController)

export default router;