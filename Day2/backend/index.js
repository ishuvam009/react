const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('user/signup',(req,res)=>{

});
app.post('user/login',(req,res)=>{

});

app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}.`);
})