import express,{json} from 'express';
import { adminroute } from './Routes/adminroute.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app=express();
app.use(cors({
    origin:'http://127.0.0.1:5500',
    credentials:true
}))
app.use(json());
app.use('/',adminroute)

const port=process.env.port || 8000;

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})