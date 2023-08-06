const Tutorial = require("../models/index");

// Create and Save a new Tutorial

const createTutorial = async function (req, res) {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
const getAllTutorials = (req, res) => {
    const title = req.query.title;

    Tutorial.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });};

// // Find a single Tutorial with a id
// const getTutorial = (req, res) => {};

// // find all published Tutorials
// const getAllPublishedTutorials = (req, res) => {};

// // Update a Tutorial identified by the id in the request
// const updateTutorial = (req, res) => {};

// // Delete a Tutorial with the specified id in the request
// const deleteTutorial = (req, res) => {};

// // Delete all Tutorials from the database.
// const deleteAllTutorials = (req, res) => {};

module.exports = {
  createTutorial,
  getAllTutorials,
//   getTutorial,
//   getAllPublishedTutorials,
//   updateTutorial,
//   deleteTutorial,
//   deleteAllTutorials,
};
