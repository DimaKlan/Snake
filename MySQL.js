const mysql = require("mysql2");
const express = require("express");

var connection = mysql.createConnection({
  database: "games",
  host: "localhost",
  user: "root",
  password: "klan"
});

//const sql = "SELECT * FROM users"; //для получения данных
const sql = "INSERT INTO users (nikname,login,password) VALUES (?,?,?)"; //для записи данных в БД

connection.query(sql, function(err, results) {
  if (err) console.log(err);
  console.log(results);
});

connection.end();

/* Пример (начало)
app.post('/api/router/Singup' , urlencodedParser , function (reg,res){
	if(!req.body) return res.sendStatus(400);
    		const usernamesignup = req.body.usernamesignup;
    		const emailsignup = req.body.emailsignup;
			const passwordsignup = req.body.passwordsignup;
			pool.query("INSERT INTO users (nikname,login, password) VALUES ?",
			[usernamesignup ,emailsignup, passwordsignup], function(err, data) {
      	if(err) return console.log(err);
      	res.redirect("/");
    });
});
Пример( Конец ); */

// res.send("Hello," + nikname); // Пример вывода с БД никнэйма и добавляение к нему слова hello

///////////////База Данных///////////////////
/*
CREATE DATABASE games;
USE games;
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	nikname VARCHAR(50),
	login VARCHAR(50),
	password VARCHAR(50),
	score VARCHAR(50)
	PRIMARY KEY (id));
INSERT INTO users (nikname,login,password,score) VALUES ('DimaKlan', 'dima.klan.99@mail.ru', 'klan' , '666'); 



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'klan';
*/
