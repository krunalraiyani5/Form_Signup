
const mongoose = require("mongoose");
const SignupSchema = new mongoose.Schema({
    name : {type : String, require:true},
    email : {type : String, require: true,unique:true},
    mobile : {type : String, require: true},
    password : {type : String, require: true},
    uniqueID : {type : String, require: true, unique:true},
    points: {type: String, default: 0},
    Exam: {type: Boolean, default: false },
    Exam_date: {type: String},
    answers: {type: Array},
    Pan_No: {type: String},
    Aadhar_No : {type: String},
    Aadhar_Image_Front :{type: String},
    Profile_Image : {type: String},
    Education_Image : {type: String},
    Education_value: {type: String},
    Upload_Time : {type : String},



    remainingTime: {
        type: Number,
        default: 120000,
        required: true
      },
})

const Signup = mongoose.model("user-signup", SignupSchema);

module.exports = Signup;








