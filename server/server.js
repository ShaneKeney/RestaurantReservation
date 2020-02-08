var path = require("path");
var inquire = require("inquire");
var express = require("express");
var fs = require ("fs");

var reservation = [];
var waitingList = [];

const PORT = 8888;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "templates/home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/reserve.html", function(req, res) {
    let responseReservation = req.body;
    let newReservation = new reservation(responseReservation.id, responseReservation.eventNames, 
        responseReservation.email, responseReservation.phoneumber);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
})