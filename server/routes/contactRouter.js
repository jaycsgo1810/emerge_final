const express = require("express");
const auth = require("../middleware/auth");
const contactController = require("../controllers/contactController");
const contactRouter = express.Router();

contactRouter.get(
  "/getallcontact",
  auth,
  contactController.getallcontacts
);

contactRouter.post(
  '/add',
  auth, 
  contactController.addNewContact);

contactRouter.post(
    '/delete',
    auth, 
    contactController.deleteContact);

module.exports = contactRouter;
