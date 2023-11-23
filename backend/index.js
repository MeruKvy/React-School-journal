var express = require("express");
const { MongoClient } = require("mongodb");
var cors = require("cors");
const multer = require("multer");

var app = express();
app.use(cors());

var MONGO_URI =
  "mongodb+srv://Merkviladze:Cytu5Ll7WatYybhI@cluster0.zjslaev.mongodb.net/?retryWrites=true&w=majority";
var DATABASE_NAME = "SchoolList";
var database;

app.listen(3000, () => {
  MongoClient.connect(MONGO_URI, (error, client) => {
    if (error) {
      console.error("Error connecting to MongoDB:", error);
      return;
    }
    database = client.db(DATABASE_NAME);
    console.log("Connection successful");
  });
});
