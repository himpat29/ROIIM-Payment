const serverless = require('serverless-http');
const express = require('express');
// const cors = require("cors");
// const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
// app.use(cors);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.get('/hello-world', function (req, res) {
  res.send('Hello World!');
})

app.post("/payments", (req, res) => {
  console.log("server has recieved");
  console.log("body is : ");
  console.log(req.body);
  let body = req.body;
  let header = {
    "Authorization": "Basic cHJpdmF0ZS03NzUxOkItcWEyLTAtNWYwMzFjZGQtMC0zMDJkMDIxNDQ5NmJlODQ3MzJhMDFmNjkwMjY4ZDNiOGViNzJlNWI4Y2NmOTRlMjIwMjE1MDA4NTkxMzExN2YyZTFhODUzMTUwNWVlOGNjZmM4ZTk4ZGYzY2YxNzQ4",
    "Content-Type": "application/json",
    "Simulator" : "EXTERNAL"
  };
  let url = "https://api.test.paysafe.com/paymenthub/v1/payments";

  // console.log(JSON.stringify(url, null, 2));
  // console.log(JSON.stringify(body, null, 2));
  // console.log(JSON.stringify(header, null, 2));

  axios
    .post(url, body, {
      headers: header
    })
    .then(function (response) {
      console.log("resolved");
      console.log(response.data);
      // return res.json(response.body);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
});

module.exports.handler = serverless(app);



