var express = require("express");
var sushi = require("../models/sushi.js");

var router = express.Router();

  // router.get('/', function (req, res) {
  //   res.render('index');
  // });


router.get("/", function(req, res) {

  sushi.all(function(data) {

    var object = {
      sushis: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/api/sushis", function(req, res) {
  sushi.create([
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


router.put("/api/sushis/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  sushi.update({
    eaten: "1"
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/sushis/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  sushi.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});




// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   sushi.update({
//     eaten: req.body.eaten
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });





// Export routes for server.js to use.
module.exports = router;