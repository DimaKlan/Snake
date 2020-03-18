const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const login = require("./api/router/Login");
const singup = require("./api/router/Singup");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.disable("x-powered-by");

//Encoding settings
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use("/login", login);
app.use("/singup", singup);

module.exports = app;
