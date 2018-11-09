const path = require("path")

module.exports = function (app) {

    app.get("/api/friends", function(req, res){
        console.log("working")
    });

    app.post("/api/friends", function(req, res){
        res.json()
    });
}