var orm = require("../config/orm.js");

var sushi = {
  all: function(cb) {
    orm.selectAll("sushis", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(newSushiName, cb) {
    orm.insertOne("sushis", newSushiName, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("sushis", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("sushis", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = sushi;
