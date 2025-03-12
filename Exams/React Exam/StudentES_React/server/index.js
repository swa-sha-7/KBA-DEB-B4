import express,{json} from 'express'
import {admin} from './routes/admin.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express();
app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
const port=process.env.Port
app.use(json());
app.use('/',admin)
app.listen(port, () => {
  console.log("server is running ",  port)
})