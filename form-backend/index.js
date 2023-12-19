require("dotenv").config();
const express = require("express");

const cors = require("cors");

const PORT = process.env.PORT || 8080;
const connect = require("./src/Config/db");
const signupRoute = require("./src/routes/signup.route");
const timerRoute = require("./src/routes/timer.route");
const questionRoute = require("./src/routes/question.route");
const answersRoute = require("./src/routes/answers.route");
// const certiRoute = require("./src/routes/certi.route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", signupRoute);
app.use("/timer", timerRoute);
app.use("/question", questionRoute);
app.use("/answers", answersRoute);
// app.use("/certi", certiRoute);


app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening http://localhost:${PORT}`);
  } catch (e) {
    console.log(e);
  }
});








