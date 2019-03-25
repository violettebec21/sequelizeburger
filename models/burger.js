// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//store functions in burger variable
var burger = {
  //grabs all the burgers from the database
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //creates a new burger in our database 
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //updates a burger in our database
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  //delete functionality
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res); 
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
