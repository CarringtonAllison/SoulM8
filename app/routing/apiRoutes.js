const path = require("path")

module.exports = function (app) {

    app.get("/api", function(req, res){
        console.log(res)
        console.log("working")
    });

}