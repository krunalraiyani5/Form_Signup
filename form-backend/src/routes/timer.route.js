const express = require("express");
const app = express.Router();

const Signup = require("../models/signup.model");

app.post("/", async (req, res) => {
  const { email, remainingTime, update } = req.body;
    
  try {
    let user = await Signup.find({ email });
    if (user.length > 0) {

      if(update){
        const updateTime = await Signup.updateOne({email},  { $set: { remainingTime: remainingTime } })

        return res.send({status : "ok", msg:"Timer updated successfully", timer:remainingTimeInSeconds});
      }else{
        
        const remainingTimeInSeconds = user[0].remainingTime;
        return res.send({status : "ok", msg:"Timer updated successfully", timer:remainingTimeInSeconds});
      }
    
      
    } else {
     return res.send({Status : "error", msg:"Please post valid email"});
    }
  } catch (e) {
    res.send("Please Fill All Credendtials");
  }
});

app.get("/", async (req, res) => {
    const { email } = req.body;
    console.log(email);
      
    try {
      let user = await Signup.find({ email });
      if (user.length > 0) {
        const remainingTimeInSeconds = user[0].remainingTime;
      // const updateTime = await Signup.updateOne({email},  { $set: { remainingTime: remainingTime } })
  
        return res.send({status : "ok", msg:"Remaining time", timer:remainingTimeInSeconds});
      } else {
       return res.send({Status : "error", msg:"Please post valid email"});
      }
    } catch (e) {
      res.send("Please Fill All Credendtials");
    }
  });




module.exports = app;