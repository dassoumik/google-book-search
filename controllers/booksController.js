const db = require("../models");
const Books = require("../models/book");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    Books
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        setErrors(err.error.response.data);
        console.log(error.response.data);
        res.status(422).json(err.error.response.data)});
  },
  findById: function(req, res) {
    console.log(req.params.id)
   db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    Books
      .create(req.body)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => {        
        console.error(err)
        res.status(422).json(err)});
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
