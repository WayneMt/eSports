const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./data/config.js");
const { response } = require("express");
const port = 3000;
const app = express();
const router = require("./routes/router.js");

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.set("view engine", "ejs");

router(app);

// app.get("/", (request, response) => {
//     response.render("../views/pages/index", {
// 		title: "Here is my page title"
// 	});
// });




// app.get("/about", (request, response) => {
// 	response.render("../views/pages/about", {});
// });

// app.get("/animals", (request, response) => {
// 	let animals = [
// 		{name: "Orochimaru", breed: "Serpent", birthYear: 2020, alive: true},
// 		{name: "Mickey", breed: "Mouse", birthYear: 2019, alive: true},
// 		{name: "Courage", breed: "Dog", birthYear: 2018, alive: false},
// 	];
// 	let motto = "Good software requires robust testing";

// 	response.render("../views/pages/animals", {
// 		animals: animals,
// 		motto: motto
// 	})
// });





// Bottom bit for later

// app.get("/", (request, response) => {
//     pool.query('SELECT * FROM address', (error, result) => {
//         if (error){
//             throw error;
//         }
//         response.send(JSON.stringify(result));
//     });
// });

// Start the server
const server = app.listen(port, (error) => {
    if (error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Server listening on port ${server.address().port}`);
});