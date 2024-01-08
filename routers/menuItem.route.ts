import express from 'express'
import { createMenuItemController,getAllMenuItemController,getMenuItemByIdController,updateMenuItemByIdController,deleteMenuItemController,getAllMenuItemByRestaurantIdController } from '../controllers/menuItem.controller'


const router = express.Router();

router.get('/',getAllMenuItemController);
router.get('/restaurant/:id',getAllMenuItemByRestaurantIdController);
router.get('/:id',getMenuItemByIdController);
router.post('/create',createMenuItemController);
router.put('/edit/:id',updateMenuItemByIdController);
router.delete('/delete/:id',deleteMenuItemController);


export default router;