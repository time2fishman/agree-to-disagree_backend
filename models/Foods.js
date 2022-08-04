// Require
const mongoose = require('mongoose')

// Schema(s)
const FoodsSchema = new moongoose.Schema({
    name: String,
    image: String,
    cuisine: String,
    description: String
})

// Instantiate the model and give it a name
const Foods = mongoose.model('Foods', FoodsSchema)

// Export the model
module.exports = Foods 