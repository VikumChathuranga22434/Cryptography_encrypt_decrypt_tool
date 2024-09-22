import express from "express";
import dotenv from "dotenv";
import features from "./routes/features.routes.js";

// configure the dotenv
dotenv.config();

//express app initialization
var app = express();

app.get("/", function (req, res) {
  res.send("Welcome to the Cryptography Project....");
});

// use the features app routes in the app
app.use(express.json()); // It parses incoming requests with JSON payloads and is based on body-parser.

app.use("/api/features", features);

//server listening on port 3000
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server listening the port http://localhost:" + port);
});
