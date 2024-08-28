const { z } = require('zod')

const todoSchema = z.object({
    id : z.number(),
    title : z.string(),
    description : z.string() 
})

module.exports = {
    todoSchema
}
