const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

const data = {
  username: "admin",
  password: "12345@",
};

app.post("/login", (req, res) => {
    const {username,password} = req.body;

    if(username === data.username && password === data.password){
        res.json({message:"Login Sucess"})
    }else{
        res.status(401).json({message:"Invalid Credentials."})
    }
});

app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});
