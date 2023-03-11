import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";


const app = express();
mongoose.connect(
	"mongodb://sirine:sirine@ac-zljk90e-shard-00-00.fr3hifs.mongodb.net:27017,ac-zljk90e-shard-00-01.fr3hifs.mongodb.net:27017,ac-zljk90e-shard-00-02.fr3hifs.mongodb.net:27017/?ssl=true&replicaSet=atlas-lyjhpp-shard-0&authSource=admin&retryWrites=true&w=majority")

// middlewars

app.use(express.json())

app.use(cors());

app.use("/auth", userRouter);





app.listen(3001,()=> {
	console.log("running db")
	
})