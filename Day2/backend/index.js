const express = require('express');
const { signupUser, updateTodo, createTodo, } = require('./types_zod');
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('user/signup',(req,res)=>{

});

app.post('user/login',(req,res)=>{

});

app.get('/user/todos',(req,res)=>{

});

app.post('/user/todo',(req,res)=>{

});

app.put('/user/completed',(req,res)=>{

});


app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}.`);
})