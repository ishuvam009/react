const express = require('express');
const { signupUser, updateTodo, createTodo, } = require('./types_zod');
const { UserSignupModel,TodoSchema } = require('./db/mode');
const app = express();
const PORT = 3000;

app.use(express.json());


// app.post('user/signup',(req,res)=>{

// });

// app.post('user/login',(req,res)=>{

// });


app.post('/user/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            message: 'You send wrong inputs.',
        })
        return;
    }
    //save in mongoDB
    await TodoSchema.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        message: 'Todo Created',
    })
});


app.get('/user/todos',async (req,res)=>{
    const findTodo = await TodoSchema.find({});

    res.json({
        findTodo
    })
});


app.put('/user/completed',async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.ststus(411).json({
            message: 'You send wrong inputs.',
        })
        return;
    }
    //Update in MongoDB
    TodoSchema.update({
        _id: req.body.id
    },
    {
        completed: true,
    })
    res.json({
        msg: "Marked as completed."
    })
});


app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}.`);
})