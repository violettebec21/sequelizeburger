var express = require("express");

//creating router for our app
var router = express.Router();

// Import the model (sequelize-burgers.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll().then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    //index refers to our index.handlebars file 
    //passing the hbsObject to the index.handlebars file
  });
});

// CREATE----------------------------------------
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false,
}).then(function(result) {
    res.json({ id: result.insertId });
  });
  res.redirect('/');
});

// UPDATE----------------------------------------
router.put("/burgers/update/:id", function(req, res) {
  db.Burger.update({
    devoured: [req.body.devoured],
  }, {
    where: {
      id: [req.params.id]
    }
  });
  res.redirect('/');
});

router.delete("/burgers/delete/:id", function(req, res) {
  db.Burger.destroy({
      where:{
        id: [req.params.id]
      }
  });
  res.redirect('/');
});

// Export routes for server.js to use
module.exports = router;
