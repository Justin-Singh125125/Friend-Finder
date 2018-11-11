var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

//set up express to allow data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//point our server as specific locations to access the urls
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//make our server listen so it can respond to what the user wants
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})