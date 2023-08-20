const Router = require("express");
const { createTutorial, getAllTutorials } = require("../controllers/index");

const tutorialRouter = Router();

// Create a new Tutorial
tutorialRouter.post("/", createTutorial);

// Retrieve all Tutorials
tutorialRouter.get("/", getAllTutorials);

module.exports = { tutorialRouter };
