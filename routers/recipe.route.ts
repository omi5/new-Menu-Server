import express from 'express'
import { createRecipeController, getRecipeByIdController,getAllRecipeByRestaurantIdController,getAllRecipeController,updateRecipeByIdController,deleteRecipeController } from '../controllers/recipe.controller'

const router = express.Router();

router.get('/',getAllRecipeController);
router.get('/:id',getRecipeByIdController);
router.get('/restaurant/:id',getAllRecipeByRestaurantIdController);
router.post('/create',createRecipeController);
router.put('/edit/:id',updateRecipeByIdController);
router.delete('/delete/:id',deleteRecipeController);

export default router;
