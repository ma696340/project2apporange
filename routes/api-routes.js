var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/all", function(req, res) {
    var recipesdb = "SELECT * FROM recipes";

    connection.query(recipesdb, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  
  app.post("/api/new", function(req, res) {


    var recipesdb = "INSERT INTO recipes (recipe_name, recipe_ingredients, prep_time, cook_time, recipe_instructions) VALUES (?,?,?,?,?)";

    connection.query(recipesdb, [req.body.recipe_name, req.body.recipe_ingredients, req.body.prep_time, req.body.cook_time, req.body.recipe_instructions], function(err, result) {
      if (err) throw err;
      res.end();
    });
  });
};