// Imports dependencies.
const express = require("express");

const { jwtPassportMiddleware } = require("../auth/auth.strategies");
// Imports implementation details for CRD endpoints.
const contactsController = require("./contacts.controller");

let router = express.Router();

// CREATES new contact.
router.post("/", jwtPassportMiddleware, contactsController.createNewContact);

// RETRIEVES user's contacts.
router.get("/", jwtPassportMiddleware, contactsController.getUserContacts);

// RETRIEVES user's contact by ID.
router.get(
  "/:contactid",
  jwtPassportMiddleware,
  contactsController.getContactByID
);

// UPDATES user's contact by ID.
router.put(
  "/:contactid",
  jwtPassportMiddleware,
  contactsController.updateContactbyID
);

// DELETES user's contact by ID.
router.delete(
  "/:contactid",
  jwtPassportMiddleware,
  contactsController.deleteContactByID
);

module.exports = router;
