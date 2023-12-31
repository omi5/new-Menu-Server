import express, { Router } from 'express';
import { createCategoryController, getAllCategoriesController, getCategoriesByIdController,updateCategoryByIdController,deleteCategoryController, getcategoryByUsingCategoryIdController } from '../controllers/category.controller';


const router = express.Router()


router.get('/', getAllCategoriesController);
router.get('/findOne/:id', getcategoryByUsingCategoryIdController);
router.get('/:id', getCategoriesByIdController);
router.post('/create',createCategoryController);
router.put('/edit/:id', updateCategoryByIdController);
router.delete('/delete/:id', deleteCategoryController);


export  default  router;

