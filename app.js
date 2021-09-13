const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});
app.listen(8080, () => {
  console.log("oilo");
});
