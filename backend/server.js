require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRouters =require('./routes/workouts')

const app = express();
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workoutRouters)

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT,() => {
            console.log("connected to db & listed the port ", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })





