const { z } = require('zod');

const signupUser = z.object({
    name: z.string().min(4),
    username: z.string().email(),
    password: z.string().min(8),

})

const createTodo = z.object({
    title: z.string(),
    description: z.string(),
})

const updateTodo = z.object({
    id: z.string(),
})

module.exports= {signupUser,createTodo,updateTodo}