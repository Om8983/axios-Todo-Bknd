const { Todo } = require('../db')
async function validation(req, res, next){

    let {title, description, id} = req.body;

    if(title.trim().length == 0 || description.trim().length == 0 ){
        return res.status(403).json({msg : "Empty Input"})
    }
    let output = await Todo.findOne({id})
    if(output){
        return res.status(409).json({msg : "user already exist"})
    }
    
    next();
}

module.exports = {
    validation
}