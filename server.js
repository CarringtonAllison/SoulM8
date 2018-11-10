// dependencies
const express = require("express");
const mysql = require("mysql");

const app = express();

//dynamic port 
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware for static assests like styel.css
app.use(express.static(__dirname + "/app/public"))

// //MYSQL connection info
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "datingApp_db"
// });

// // Initiate MySQL Connection.
// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected to database");
// });

//routes
//htmls
require("./app/routing/apiRoutes")(app);

//apis
require("./app/routing/htmlRoutes")(app);


// listener 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

module.exports = app;