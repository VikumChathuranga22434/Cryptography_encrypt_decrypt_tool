import express from "express";

//express app initialization
var app = express();

app.get("/", function (req, res) {
  res.send("Welcome to the Cryptography Project....");
});

app.get("/", function (req, res) {
  res.send("Welcome to the Cryptography Project....");
});

//server listening on port 3000
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server listening the port http://localhost:" + port);
});
