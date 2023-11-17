const gamesController=require("../controllers/games")
const playersController=require("../controllers/players")
const citiesController=require("../controllers/cities")
const addressesController=require("../controllers/addresses")
const router = (app) => {




    // Add your other routes in here
	app.get("/", (request, response) => {
		response.render("../views/pages/index", {
			title: "Here is my page title"
		});
	});
	
	
	
	
	app.get("/about", (request, response) => {
		response.render("../views/pages/about", {});
	});
	
	app.get("/animals", (request, response) => {
		let animals = [
			{name: "Orochimaru", breed: "Serpent", birthYear: 2020, alive: true},
			{name: "Mickey", breed: "Mouse", birthYear: 2019, alive: true},
			{name: "Courage", breed: "Dog", birthYear: 2018, alive: false},
		];
		let motto = "Good software requires robust testing";
	
		response.render("../views/pages/animals", {
			animals: animals,
			motto: motto
		})
	});
	
	app.get("/games", gamesController.getAllGames);
	app.get("/players", playersController.getAllPlayers);
	app.get("/cities", citiesController.getAllCities);
	app.get("/addresses", addressesController.getAllAddresses);
	app.get("/games/:id", gamesController.getGameById);
	app.get("/addgames", gamesController.getAllGames);
	app.get("/players/:id", playersController.getPlayerById);
	app.get("/addplayers", playersController.getAllPlayers);
	
	app.post("/games/add", gamesController.addGame);
	app.post("/games/edit/:id", gamesController.editGame);
	app.post("/games/delete/:id", gamesController.deleteGame);
	app.post("/players/add", playersController.addPlayer);
	app.post("/players/edit/:id", playersController.editPlayer);
	app.post("/players/delete/:id", playersController.deletePlayer);
	
	
	// app.get("/", (request, response) => {
	//     pool.query('SELECT * FROM address', (error, result) => {
	//         if (error){
	//             throw error;
	//         }
	//         response.send(JSON.stringify(result));
	//     });
	// });
};

// Make the router available externally
module.exports = router;


