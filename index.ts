import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import categoryRouter from './routers/category.route';
import mealTimeRouter from './routers/mealtime.route'
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());


app.use('/category', categoryRouter);
app.use('/mealtime', mealTimeRouter);


(async function connectDB(){
    await mongoose.connect('mongodb://localhost:27017/menuBuilder1');
    console.log('Connected to DB');

    app.listen(port, ()=>{
        console.log(`Server is listening at http://127.0.0.1:${port}`);
        
    })
        
})();
