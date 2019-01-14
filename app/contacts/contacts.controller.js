// Imports 3rd Party Dependencies.
const { Contact } = require("./contacts.model");

// Imports HTTP_STATUS_CODES from config.js file.
const { HTTP_STATUS_CODES } = require("../config");

// CREATES new contact.
exports.createNewContact = async (request, response) => {
  // Stores user's contact information.
  const newContact = {
    user: request.user.id,
    name: request.body.name,
    description: request.body.description,
    phone: request.body.phone,
    email: request.body.email,
    address: request.body.address
  };

  try {
    // Step 2: Create new contact.
    let createdContact = await Contact.create(newContact);
    return response
      .status(HTTP_STATUS_CODES.CREATED)
      .json(createdContact.serialize());
  } catch (error) {
    return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error);
  }
};

// RETRIEVES user's contacts.
exports.getUserContacts = async (request, response) => {
  // Step 1: Attempt to retrieve all contacts.
  try {
    let contactsList = await Contact.find({ user: request.user.id });
    // Step 2: Return sanitized contacts.
    return response
      .status(HTTP_STATUS_CODES.OK)
      .json(contactsList.map(contact => contact.serialize()));
  } catch (error) {
    return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error);
  }
};

// Retrieve user's contact by id.
exports.getContactByID = async (request, response) => {
  try {
    let contact = await Contact.findById(request.params.contactid);
    return response.status(HTTP_STATUS_CODES.OK).json(contact.serialize());
  } catch (error) {
    return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error);
  }
};

exports.updateContactbyID = async (request, response) => {
  const updatedContactValues = {
    name: request.body.name,
    description: request.body.description,
    phone: request.body.phone,
    email: request.body.email,
    address: request.body.address
  };

  try {
    let updateContact = await Contact.findOneAndUpdate(
      request.params.contactid,
      updatedContactValues
    );
    return response.status(HTTP_STATUS_CODES.OK).json({ success: true });
  } catch (error) {
    return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error);
  }
};

exports.deleteContactByID = async (request, response) => {
  try {
    let deletedContact = await Contact.findOneAndDelete(
      request.params.contactid
    );
    return response.status(HTTP_STATUS_CODES.CREATED).json({ success: true });
  } catch (error) {
    return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error);
  }
};
