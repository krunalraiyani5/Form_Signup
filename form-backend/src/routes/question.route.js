const express = require("express");
const app = express.Router();

const Question = require("../models/question.model");

app.get("/", async (req,res) => {

    try{

        let data = await Question.find({}, )

        return res.send({Status: "OK", data : data})

    }
    catch (e) {
        res.status(400).send({Status : "Error"});

    }
})

module.exports = app;