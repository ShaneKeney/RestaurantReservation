let express = require("express");
let path = require("path");
let reservation = require("./server/models/Reservation");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [];

app.post("/api/characters", function(req, res) {
    let newReservation = new reservation(req.id, req.eventNames, req.email, req.phoneumber);
    reservations.push(newReservation);
    //update html
});