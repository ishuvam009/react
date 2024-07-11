const { default: mongoose } = require("mongoose");

const singnupSchema = new mongoose.Schema({
    
    name: {type: String,require:true},
    username: {type: String,require:true},
    password: {type: String,require: true}

})

const UserSignupModel = mongoose.model('user',singnupSchema);

const todoSchema = new mongoose.Schema({
    title: {type: String, require: true},
    descroiption: {type: String, require: true},
    completed: {type: Boolean, require: true},
})

const TodoSchema = mongoose.model('todo',todoSchema);

module.exports = {
    UserSignupModel,
    TodoSchema,
}