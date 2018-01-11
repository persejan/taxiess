var mongoose = require("mongoose");

//SCHEMA
var taxiSchema = new mongoose.Schema({
    slika: String,
    letnik: Number,
    maxPotnikov: Number,
    maxHitrost: Number,
    rents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rent"
        }
    ]
});
module.exports = mongoose.model("Taxi", taxiSchema);