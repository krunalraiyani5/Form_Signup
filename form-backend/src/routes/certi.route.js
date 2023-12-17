const express = require("express");
const app = express.Router();
const path = require("path")

var pdf = require("pdf-creator-node");
var fs = require("fs");

var pathname = path.join(__dirname, "../view", "certi.hbs")
var html = fs.readFileSync(pathname, "utf8");

const Signup = require("../models/signup.model");

app.get("/", async (req, res) => {
  // const { email} = req.body;

  try {
    let path1 = new Date().getTime() + ".pdf";
    // let user = await Signup.findOne({ email });
   
      var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
      };
      var users = {
        name: "Shyam",
        age: "26",
      };

      var document = {
        html: html,
        data: {
          users: users,
        },
        path:  path1,
        type: "",
      };

     var fileName = pdf
        .create(document, options)
        .then((res) => {
          console.log(res);
          let file = `http://localhost:8080/${path1}`
          return file
        })
        .catch((error) => {
          console.error(error);
        });
        let url = await fileName
        res.status(200).send({ Status: "ok", msg :url });
     
  } catch (e) {
    res.status(400).send({ Status: "Error" });
  }
});

module.exports = app;
