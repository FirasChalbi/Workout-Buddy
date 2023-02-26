const express = require('express')
const { createWorkout, getWorkout, getWorkouts ,deleteWorkout,updateWorkout} = require('../controllers/workoutController')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/', deleteWorkout )
router.patch('/:id', updateWorkout)
module.exports =router