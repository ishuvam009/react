const { default: mongoose } = require("mongoose");

const singnupSchema = new mongoose.Schema({
    
    name: {type: String,require:true},
    username: {type: String,require:true},
    password: {type: String,require: true}

})

const UserSignupModel = mongoose.model('user',singnupSchema);

module.exports = {
    UserSignupModel
}