const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
//const mysql = require("../../MySQL");
var connection = mysql.createConnection({
  database: "games",
  host: "localhost",
  user: "root",
  password: "klan"
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body) return res.sendStatus(400);
  const usernamesignup = req.body.usernamesignup;
  const emailsignup = req.body.emailsignup;
  const passwordsignup = req.body.passwordsignup;
  connection.query(
    "INSERT INTO users (nikname ,login, password) VALUES (?,?,?)",
    [usernamesignup, emailsignup, passwordsignup],
    function(err, data) {
      if (err) return console.log(err);
      //res.redirect("/");
    }
  );
  /*
  let valuesObj = req.body;
  let values = [];

  for (val in valuesObj) {
    values.push(valuesObj[val]);
  }

  values.forEach(element => {
    console.log(element);
  });

  const sql = "INSERT INTO users (nikname,login,password,score) VALUES ?";

  connection.query(sql, [values], function(err, results) {
    if (err) console.log(err);
    console.log(results);
  });
  */
  return res.status(200).json({
    message: "Hello"
  });
});

module.exports = router;
