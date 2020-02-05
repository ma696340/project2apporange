// Dependencies
// =============================================================

/* // This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
 */
// Creates a "Chirp" model that matches up with DB
module.exports = function(sequelize, DataTypes){
  var Recipe = sequelize.define("Recipe", {
    recipe_name: DataTypes.STRING,
    recipe_ingredients: DataTypes.STRING,
    prep_time: DataTypes.STRING,
    cook_time: DataTypes.STRING,
    recipe_instructions: DataTypes.STRING,
  });
  return Recipe;


}



/* // Syncs with DB
Recipe.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Recipe; */
