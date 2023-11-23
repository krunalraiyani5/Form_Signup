const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    name : {type : String, require:true},
    email : {type : String, require: true,unique:true},
    mobile : {type : String, require: true},
    uniqueID : {type : String, require: true, unique:true},
})
const Signup = mongoose.model("user-signup", SignupSchema);

module.exports = Signup;