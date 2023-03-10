import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://sirine:sirine@ac-zljk90e-shard-00-00.fr3hifs.mongodb.net:27017,ac-zljk90e-shard-00-01.fr3hifs.mongodb.net:27017,ac-zljk90e-shard-00-02.fr3hifs.mongodb.net:27017/?ssl=true&replicaSet=atlas-lyjhpp-shard-0&authSource=admin&retryWrites=true&w=majority")




app.listen(3001 , ()=> console.log ("server started"))