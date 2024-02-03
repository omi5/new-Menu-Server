import express from 'express'
import { createRecipeController, getRecipeByIdController,getAllRecipeByRestaurantIdController,getAllRecipeController,updateRecipeByIdController,deleteRecipeController } from '../controllers/recipe.controller'
import { authMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/',getAllRecipeController);
router.get('/:id',getRecipeByIdController);
router.get('/restaurant/:id',authMiddleware,getAllRecipeByRestaurantIdController);
router.post('/create',authMiddleware,createRecipeController);
router.put('/edit/:id',updateRecipeByIdController);
router.delete('/delete/:id',deleteRecipeController);

export default router;
