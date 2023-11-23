const express = require("express");
const app = express.Router();

const Signup = require("../models/signup.model");

const { v4: uuidv4 } = require('uuid');

app.post("/", async (req, res) => {
  const { email, name, mobile } = req.body;
    
  try {
    let user = await Signup.find({ email });
    if (user.length > 0) {
      return res.send({status : "Already a user", msg:"This Email Already used Please Use Different Email ID."});
    } else {
      const uniqueID = uuidv4();
      let newUser = await Signup.create({
        ...req.body,
        uniqueID
      });
      
      return res.send({Status : "Ok", msg:"Registration successful", uID:  uniqueID});
    }
  } catch (e) {
    res.send("Please Fill All Credendtials");
  }
});

// app.get("/", async (req, res) => {
 
    
//   try {
//     let user = await Signup.find();
//    res.send({UserDetails : user})
//   } catch (e) {
//     res.send("Bad Request");
//   }
// });


module.exports = app;