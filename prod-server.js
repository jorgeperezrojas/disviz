var path = require("path");
var express = require("express");

var DIST_DIR = path.join(__dirname, "build");
var PORT = 3000;
var app = express();

//Serving the files on the dist folder
app.use(express.static('./build'));

//Send index.html when the user access the web
app.get("/*", function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT);
