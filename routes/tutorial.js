const Router = require("express");
const {
  createTutorial,
  getAllTutorials,
  // deleteAllTutorials,
  // deleteTutorial,
  // getTutorial,
  // updateTutorial,
  // getAllPublishedTutorials,
} = require("../controllers/index");

const tutorialRouter = Router();
// employeeRouter.post("/add", addEmployee);
// employeeRouter.get("/:id", addEmployee);
// Create a new Tutorial
tutorialRouter.post("/", createTutorial);

// Retrieve all Tutorials
tutorialRouter.get("/", getAllTutorials);

// // Retrieve all published Tutorials
// tutorialRouter.get("/published", getAllPublishedTutorials);

// // Retrieve a single Tutorial with id
// tutorialRouter.get("/:id", getTutorial);

// // Update a Tutorial with id
// tutorialRouter.put("/:id", updateTutorial);

// // Delete a Tutorial with id
// tutorialRouter.delete("/:id", deleteTutorial);

// // Delete all Tutorials
// tutorialRouter.delete("/", deleteAllTutorials);
module.exports = { tutorialRouter };
