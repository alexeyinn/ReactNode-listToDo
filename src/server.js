const express = require("express");

const app = express();
const server = require("http").Server(app);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.listen(8080, (res, err) => {
  if (err) {
    throw Error(err);
  } else {
    console.log("Сервер запущен.");
  }
});
