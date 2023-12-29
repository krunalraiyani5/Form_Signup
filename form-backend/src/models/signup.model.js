
const mongoose = require("mongoose");
const SignupSchema = new mongoose.Schema({
    name : {type : String, require:true},
    email : {type : String, require: true,unique:true},
    mobile : {type : String, require: true},
    password : {type : String, require: true},
    uniqueID : {type : String, require: true, unique:true},
    points: {type: String, default: 0},
    Exam: {type: Boolean, default: false },
    date: {type: String},
    answers: {type: Array},

    remainingTime: {
        type: Number,
        default: 43200000,
        required: true
      },
})

const Signup = mongoose.model("user-signup", SignupSchema);

module.exports = Signup;








