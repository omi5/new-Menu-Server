import express from 'express'
import {getAllMenuItemForMP, createMenuItemController,getAllMenuItemController,getMenuItemByIdController,updateMenuItemByIdController,deleteMenuItemController,getAllMenuItemByRestaurantIdController } from '../controllers/menuItem.controller'
import { authMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/',getAllMenuItemController);
router.get('/restaurant',authMiddleware,getAllMenuItemByRestaurantIdController);
router.get('/restaurant/:id',getAllMenuItemForMP);
router.get('/:id',getMenuItemByIdController);
router.post('/create',authMiddleware, createMenuItemController);
router.put('/edit/:id',updateMenuItemByIdController);
router.delete('/delete/:id',deleteMenuItemController);


export default router;