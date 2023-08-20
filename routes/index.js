const express = require("express");
const apiRouter = express.Router();

const { tutorialRouter } = require("./tutorial");

apiRouter.use("/tutorials", tutorialRouter);

module.exports = apiRouter;
