const express = require("express");
const auth = require("../middleware/auth");
const feedbackController = require("../controllers/feedbackController");
const feedbackRouter = express.Router();

feedbackRouter.get(
  "/getallfeedback",
  auth,
  feedbackController.getallfeedback
);

feedbackRouter.post(
  '/add',
  auth, 
  feedbackController.addNewFeedback
);


module.exports = feedbackRouter;
