// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Chirp = require("../models/recipe");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Recipe.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    
    Recipe.create({
      recipe_name: req.body.recipe_name,
      recipe_ingredients: req.body.recipe_ingredients,
      prep_time: req.body.prep_time,
      cook_time: req.body.cook_time,
      recipe_instructions: req.body.recipe_instructions,
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

  

};