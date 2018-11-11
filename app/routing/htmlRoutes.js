//include the path package so we can gtet the correct file path for our html
var path = require("path");

//we are going to be exporting so the server can include this file

module.exports = function (app) {

    //the code below handles when a user requests to  visit a page



    //if this is hit, will take user to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    //catches all input and if not one of the listen above, takes to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}