let Category = require('../models/Category').Category;

const getCategories = function(req, res) {
  Category.find(function(err, categories) {
    if(err) {
      console.log(err);
      return res.status(500).json(genericResponse())
    }
    console.log("Sending categories");
    res.json(categories);
  })
};

module.exports = {
  getCategories
};
