const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://cohort0to1:Iwd4P23B2vvSiVwg@cluster0.9cfvukm.mongodb.net/newTodos?retryWrites=true&w=majority&appName=Cluster0");

const singnupSchema = new mongoose.Schema({
    
    name: {type: String,require:true},
    username: {type: String,require:true},
    password: {type: String,require: true}

})

const UserSignupModel = mongoose.model('user',singnupSchema);

const todoSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    completed: {type: Boolean, require: true},
})

const TodoSchema = mongoose.model('todo',todoSchema);

module.exports = {
    UserSignupModel,
    TodoSchema,
}