const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://omWadhi64:7gFI_%40oM&123@cluster0.pl3kem8.mongodb.net/recoilTodo")

const todoSchema = mongoose.Schema({
    id : String,
    title : String,
    description : String 
})

const Todo = mongoose.model("todos", todoSchema)

module.exports = {
    Todo
}