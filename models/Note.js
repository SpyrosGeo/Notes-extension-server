const {model,Schema} = require('mongoose')



const noteSchema = new Schema({
    body:String,
})


module.exports = model('Note',noteSchema)