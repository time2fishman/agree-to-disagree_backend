// Require Express module
const express = require('express')
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router()
// Import Foods.js model
const Foods = require('../models/Foods')

// ***** ROUTES *****

// Following CRUD basic guidelines

// Post new food item (C - create)
router.post('/', async (req, res, next) => {
    try {
        const newFoodItem = await Foods.create(req.body)
        res.json(newFoodItem)
    } catch (err) {
        next(err)
    }
})

// Get all foods (R - read)
router.get('/', async (req, res, next) => {
    try {
        const foods = await Foods.find({})
        res.json(foods)
    } catch (err) {
        next(err)
    }
})

// Get one food by id (R - read)
router.get('/:id', async (req, res, next) => {
    try {
        const food = await Foods.findById(req.params.id)
        res.json(food)
    } catch (err) {
        next(err)
    }
})

// Update food by id (U - update)
router.put('/:id', async (req, res, next) => {
    try {
        const updateFoodItem = await Foods.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        res.json(updateFoodItem)
    } catch (err) {
        next(err)
    }
})

// Delete food by id (D - delete)
router.delete('/:id', async (req, res, next) =>  {
    try {
        const deleteFoodItem = await Foods.findByIdAndDelete(req.params.id)
        res.json(deleteFoodItem)
    } catch (err) {
        next(err)
    }
})

// Export routes
module.exports = router
