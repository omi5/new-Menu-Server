import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import categoryRouter from './routers/category.route';
import mealTimeRouter from './routers/mealtime.route';
import menuItemRouter from './routers/menuItem.route';
import recipeRouter from './routers/recipe.route'
import loginData from './routers/login.route'
import inventoryRouter from './routers/inventory.route'

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());


app.use('/category', categoryRouter);
app.use('/mealtime', mealTimeRouter);
app.use('/menuItem', menuItemRouter);
app.use('/recipe', recipeRouter);
app.use('/login',loginData);
app.use('/inventory',inventoryRouter);


(async function connectDB(){
    await mongoose.connect('mongodb://localhost:27017/menuBuilder');
    console.log('Connected to DB');

    app.listen(port, ()=>{
        console.log(`Server is listening at http://127.0.0.1:${port}`);
        
    })
        
})();
