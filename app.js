var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

var Taxi = require("./models/taxi");
var Rent = require("./models/rent");

var rentRoutes = require("./routes/rents");
var taxiRoutes = require("./routes/taxies");

mongoose.Promise = global.Promise;

var url = process.env.DATABASEURL || "mongodb://localhost/taxiess";
mongoose.connect(url, {useMongoClient: true});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(rentRoutes);
app.use(taxiRoutes);
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, function() {
    console.log("Server has started.");
});