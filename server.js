var express =  require("express")
var app = express();
var routes = require("./route.js");
// var bodyParser = require("body-parser");
// app.use(bodyParser.json());

app.use(express.static(__dirname+ "/public"));
app.use("/", routes);

var server = app.listen(3000, function(req, res) {
    console.log("running");
});