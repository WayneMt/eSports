const pool = require("../data/config");
const getAllAddresses = (request, response) => {
    pool.query(`SELECT * FROM address`, (error, result) => {
        // If we get an error, throw it (this works like a "return" statement)
        if (error){
            throw error;
        }

        // Log the result of the database call to the console.
        console.log(result);

        // Pass the results of the database call to the countries view
        response.render("../views/pages/addresses", {
            title: "Addresses",
            addressesArray: result
        });
    });
};

// Make this script available elsewhere with the "require" statement
module.exports = {
    getAllAddresses
};