var mongoose = require("mongoose");

var rentSchema = mongoose.Schema({
    ime: String,
    priimek: String,
    dolzinaNajema: Number
});

module.exports = mongoose.model("Rent", rentSchema);