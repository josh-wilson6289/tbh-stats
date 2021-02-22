require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

console.log("This is the MONGODB_URI before connecting: " + process.env.MONGODB_URI)

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tbhstats",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});

console.log("This is the MONGODB_URI after connecting: " + process.env.MONGODB_URI)