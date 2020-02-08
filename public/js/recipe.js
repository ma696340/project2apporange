/* global moment */

// When user clicks add-btn
$("#recipe_submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newRecipe = {
      recipe_name: $("#recipe_name").val().trim(),
      recipe_ingredients: $("#ingredients_box").val().trim(),
      prep_time: $("#prep_time").val().trim(),
      cook_time: $("#cook_time").val().trim(),
      recipe_instructions: $("#recipe_instructions").val().trim(),
    };
  
    console.log(newRecipe);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newRecipe)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("recipe");
  
        row.append("Recipe Name: " + newRecipe.recipe_name + "</p>");
        row.append("Ingredients: " + newRecipe.recipe_ingredients + "</p>");
        row.append("Prep Time: " + newRecipe.prep_time + "</p>");
        row.append("Cook Time: " + newRecipe.cook_time + "</p>");
        row.append("Instructions: " + newRecipe.recipe_instructions + "</p>");
        
        $("#recipes_area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#recipe_name").val("");
    $("#recipes_area").val("");
  });
  
  // When the page loads, grab all of our chirps
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("recipe");
  
        row.append("Recipe Name: " + data[i].recipe_name + "</p>");
        row.append("Ingredients: " + data[i].recipe_ingredients + "</p>");
        row.append("Prep Time: " + data[i].prep_time + "</p>");
        row.append("Cook Time: " + data[i].cook_time + "</p>");
        row.append("Instructions: " + data[i].recipe_instructions + "</p>");
        
  
        $("#recipes_area").prepend(row);
  
      }
  
    }
  
  });