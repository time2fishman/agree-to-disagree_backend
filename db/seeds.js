const mongoose = require('./connection')

const Foods = require('../models/Foods')
const foodseeds = require('./seeds.json')

Foods.deleteMany({})
    .then(() => {
        return Foods.insertMany(foodseeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })