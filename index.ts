import express,{ Express,Request,Response } from "express";

import dotenv from "dotenv"
import bodyParser from "body-parser"
import { addSmartphone, deleteSmartphone, editSmartphone, getSmartphone } from "./src/controller/smartphone.handler";
dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req:Request, res:Response) => {
  })

app.get('/v1/get-smartphone', getSmartphone);
app.post('/v1/add-smartphone', addSmartphone);
app.put('/v1/edit-smartphone/:id', editSmartphone);
app.delete('/v1/delete-smartphone/:id', deleteSmartphone);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});