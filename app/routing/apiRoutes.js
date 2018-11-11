//link our route to the json data
var friendsData = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {

        var compareUser = req.body;
        var temp;
        var currentMatchIndex;
        var lowestDifference;
        var totalDifference;
        var isFirst = true;
        //a nested for loop to check all array and scores

        for (var i = 0; i < friendsData.length; i++) {

            totalDifference = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                if (compareUser.scores[j] != friendsData[i].scores[j]) {
                    //subtracts the two scores from each index and stores in temp so we can check for negative values
                    temp = compareUser.scores[j] - friendsData[i].scores[j];
                    //if negative multiply by negative 1 to get a positive
                    if (temp < 0) {
                        temp *= -1;
                    }
                    //add temp to total difference
                    totalDifference += temp;
                }



            }

            console.log(friendsData[i].name + "total difference score: " + totalDifference);
            //first time around, set set the first i(0) to the lowestDifference and current match index
            if (isFirst) {
                lowestDifference = totalDifference;
                currentMatchIndex = i;
                isFirst = false;
            }
            //since we previosly set lowest difference to a value we can further compare that value to the current total difference
            if (totalDifference < lowestDifference) {
                lowestDifference = totalDifference;
                currentMatchIndex = i;
            }


        }


        console.log(currentMatchIndex);
        //we need to push the json to the array storage 
        friendsData.push(req.body);
        res.json(friendsData[currentMatchIndex]);
        // console.log(friendsData);
    })
}