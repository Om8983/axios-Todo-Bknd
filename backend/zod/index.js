const { z } = require('zod')

const todoSchema = z.object({
    id : z.string(),
    title : z.string(),
    description : z.string() 
})

module.exports = {
    todoSchema
}