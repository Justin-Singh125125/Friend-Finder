//link our route to the json data
var friendsData = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {

        //we need to push the json to the array storage 
        friendsData.push(req.body);
    })
}