"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //미들웨어를 등록해주는 메소드
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;
