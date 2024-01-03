const express = require("express");
const app = express.Router();
const multer = require("multer");

const Signup = require("../models/signup.model");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/public");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

app.post("/", upload.array("image",3), async (req, res) => {
    
    const imageName = req.files
    
    const Aadhar_Image_Front = imageName[0].filename;
    const Profile_Image = imageName[1].filename;
    const Education_Image = imageName[2].filename;
    const Upload_Time = new Date();

    const {education_value, Aadhar_No,Pan_No,  email } = req.body;
    

    try{
        let user = await Signup.findOne({ email });

        if(user){
            const updatePoints = await Signup.updateOne({email},  { $set: { Aadhar_Image_Front, Profile_Image, Education_Image, education_value, Aadhar_No, Pan_No, Upload_Time}})
            return res.send({Status : "Ok", msg:"Exam Completed", email: email, points, date, answers: user_answers});
         
        }else {
            return res.send({Status: "Error", msg: "There is no match of user"});
        }
    }
    catch (e){
        return res.status(400).send({Status : "Error"});
    }
  
  });

module.exports = app;