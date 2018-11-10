const path = require("path")
const friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        // Our user is the data sent in the request.
        var newUser = req.body;
        var differences = [];

        console.log(newUser)

        // Step through these potential friends.
        friends.forEach(function (user) {
            console.log(user)

            var totalDifference = 0;

            // For each answer, compare the scores and add the absolute value of the difference to the total difference.
            for (var i = 0; i < newUser.scores.length; i++) {
                var otherAnswer = user.scores[i];
                var thisAnswer = newUser.scores[i];
                var difference = +otherAnswer - +thisAnswer;
                totalDifference += Math.abs(difference);
            }

            differences.push(totalDifference);
        });

        // Find the minimum difference score.
        var minimumDifference = Math.min.apply(null, differences);

        // Since there may be more than one potential friend with that score, create an array.
        var bestMatches = [];

        // For each item in differences, if it is equal to the minimumDifference, add the corresponding friends to the bestMatches array.
        for (var i = 0; i < differences.length; i++) {
            if (differences[i] === minimumDifference) {
                bestMatches.push(friends[i]);
            }
        }

        // Then send bestMatches to the client.
        res.json(bestMatches);

        // Once you're done comparing, add the new user to the potential friends data.
        friends.push(newUser);

    });
}