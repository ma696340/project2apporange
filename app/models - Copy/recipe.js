// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Recipe = sequelize.define("recipe", {
  recipe_name: Sequelize.STRING,
  recipe_ingredients: Sequelize.STRING,
  prep_time: Sequelize.STRING,
  cook_time: Sequelize.STRING,
  recipe_instructions: Sequelize.STRING,
});

// Syncs with DB
Recipe.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Recipe;
