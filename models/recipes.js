// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var findRecipe = {
  all: function(cb) {
    orm.all("recipe", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("recipe", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("recipe", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = findRecipe;
