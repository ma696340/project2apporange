DROP DATABASE IF EXISTS recipes_db;
CREATE DATABASE recipes_db;
USE recipes_db;

/* Create database */

/* Create table */

CREATE TABLE recipe (
	recipe_id INT NOT NULL AUTO_INCREMENT, 
    recipe_name TEXT(60000) NOT NULL, 
    recipe_ingredients TEXT(60000) NOT NULL,
    prep_time INTEGER(50),
    cook_time INTEGER(50),
    recipe_instructions TEXT(60000) NOT NULL,
    
    PRIMARY KEY (recipe_id)


);