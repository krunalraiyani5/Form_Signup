const express = require("express");
const app = express.Router();

const Signup = require("../models/signup.model");

const { v4: uuidv4 } = require('uuid');

app.post("/", async (req, res) => {
  const { email, name, mobile, remainingTime } = req.body;
    
  try {
    let user = await Signup.find({ email });
    if (user.length > 0) {
      return res.send({status : "Already a user", msg:"This Email Already used Please Use Different Email ID."});
    } else {
      const fixedPart = "Analah@"
      
      const unique = uuidv4().replace(/-/g, '').substring(0, 5);
      const uniqueID = fixedPart + unique ;
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




module.exports = app;