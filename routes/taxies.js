var express = require("express");
var router = express.Router();
var Taxi = require("../models/taxi");

router.get("/", function(req, res) {
    Taxi.find({}, function(err, taxies) {
        if(err) {
            console.log(err);
        } else {
            res.render("taxies/index", {taxies:taxies});
        }
    });
});

router.post("/", function(req, res) {
    var slika = req.body.slika;
    var letnik = req.body.letnik;
    var maxPotnikov = req.body.maxPotnikov;
    var maxHitrost = req.body.maxHitrost;
    var newTaxi = {slika:slika, letnik:letnik, maxPotnikov:maxPotnikov, maxHitrost:maxHitrost}
    Taxi.create(newTaxi, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

router.get("/new", function(req, res) {
    res.render("taxies/new");
});

router.get("/:id", function(req, res) {
    Taxi.findById(req.params.id).populate("rents").exec(function(err, foundTaxi) {
        if(err) {
            console.log(err);
        } else {
            res.render("taxies/show", {taxi: foundTaxi});
        }
    });
});

module.exports = router;