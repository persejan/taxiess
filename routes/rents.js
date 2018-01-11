var express = require("express");
var router = express.Router();
var Taxi = require("../models/taxi");
var Rent = require("../models/rent");

router.get("/:id/rents/new", function(req, res) {
    Taxi.findById(req.params.id, function(err, taxi) {
        if(err) {
            console.log(err);
        } else {
            res.render("rents/new", {taxi: taxi});
        }
    });
});

router.post("/:id/rents", function(req, res) {
    Taxi.findById(req.params.id, function(err, taxi) {
        if(err) {
            console.log(err);
            res.redirect("/");
        } else {
            Rent.create(req.body.rent, function(err, rent) {
                if(err) {
                    console.log(err);
                } else {
                    taxi.rents.push(rent);
                    taxi.save();
                    res.redirect("/" + taxi._id);
                }
            });
        }
    });
});

/* router.delete("/:id/rents/:rent_id", function(req, res) {
    res.send("Destroy!");
}); */

module.exports = router;