// Require
const mongoose = require('../connection')

// Schema(s)
const FoodsSchema = new mongoose.Schema({
    name: String,
    image: String,
    cuisine: String,
    description: String
})

// Instantiate the model and give it a name
const Foods = mongoose.model('Foods', FoodsSchema)

// Export the model
module.exports = Foods 