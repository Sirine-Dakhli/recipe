import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();
mongoose.connect(
	"mongodb+srv://sirine:sirine@recipes.fr3hifs.mongodb.net/test")

// middlewars

app.use(express.json())

app.use(cors());

app.use("/auth", userRouter);

app.use("/recipes", recipesRouter);



app.listen(3002,()=> {
	console.log("running db")
	
})