import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import categoryRouter from './routers/category.route';
import mealTimeRouter from './routers/mealtime.route';
import menuItemRouter from './routers/menuItem.route';
import recipeRouter from './routers/recipe.route'
import loginData from './routers/login.route'
import inventoryRouter from './routers/inventory.route'
import authRouter from './routers/auth.route';

const port = process.env.PORT || 3000;
const app = express();
app.use(cors({exposedHeaders: ['Authorization']}));
app.use(express.json());

const dbUrl = 'mongodb+srv://mamunomi24:aftermath@projectcode.hvi77c8.mongodb.net/?retryWrites=true&w=majority'

app.use('/category', categoryRouter);
app.use('/mealtime', mealTimeRouter);
app.use('/menuItem', menuItemRouter);
app.use('/recipe', recipeRouter);
app.use('/login',loginData);
app.use('/inventory',inventoryRouter);
app.use('/auth',authRouter);

(async function connectDB(){
    await mongoose.connect(dbUrl);
    console.log('Connected to DB');

    app.listen(port, ()=>{
        console.log(`Server is listening at http://127.0.0.1:${port}`);
        
    })
        
})();
