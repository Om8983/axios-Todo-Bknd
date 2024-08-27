const { Router } = require('express');
const { Todo } = require("../db");
const { todoSchema } = require("../zod");
const { validation } = require("../middlewares/todoware")
// defining router
const router = Router();



// routes 
router.post("/addTodo", validation, async (req, res) => {

    let response =  todoSchema.safeParse(req.body);
    if(!response.success){
        return res.status(403).json({msg : "Invalid Input"})
    }

    let {id, title, description} = response.data;
    await Todo.create({id, title, description});
    res.status(200).json({msg : "Todo created Successfully"})
})

// to get all todos 
router.get("/todos", async (req, res) => {

    let allTodo = await Todo.find({})
    res.status(200).json({"Todos" : allTodo})
})

// to get todos by their id 
router.get("/todos/:id",async (req, res) => {

    let todoId = req.params.id;
    let todo = await Todo.findOne({id : todoId})
    // console.log(todo);
    
    if(!todo){
        return res.status(404).json({error : "No Todo by this id exist"})
    }
    res.status(200).json({todo})
})

// get todos by filter string 
router.get("/todos/filter/:filter", async (req, res) => {

    let filterStr = req.params.filter;
    let allTodo = await Todo.find({});
    let todo = allTodo.filter((x) => {
        return x.title.includes(filterStr) || x.description.includes(filterStr)
    })
    if(todo.length === 0 ){
        return res.status(404).json({msg : "No such todo exist in db"})
    }
    res.status(200).json({todo})
})


module.exports = {
    router
}

// middleware to check if the length isn't empty string
// middleware to check if the id already exist, that says id must always be unique
