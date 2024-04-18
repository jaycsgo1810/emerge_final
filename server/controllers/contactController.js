const Contacts = require("../models/contact");

const getallcontacts = async (req, res) => {
  try {
    const contacts = await Contacts.find({ userId: req.locals });
    return res.send(contacts);
  } catch (error) {
    res.status(500).send("Unable to get all Contacts");
  }
};

const addNewContact = async (req, res) => {
  try {
    const newContact = new Contacts({ 
      userId: req.locals, 
      name: req.body.name, 
      contact: req.body.contact
    });
    
    // Save the contact to the database
    await newContact.save();

    res.status(201).send(newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
    res.status(500).send('Unable to add contact');
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contacts.findById({_id: req.body.id});
    if (!contact) {
      return res.status(404).send('Contact not found');
    }

    // Delete the contact from the database
    await Contacts.findByIdAndDelete({_id: req.body.id});

    res.status(200).send('Contact deleted successfully');
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).send('Unable to delte contact');
  }
};

module.exports = {
  getallcontacts,
  addNewContact,
  deleteContact
};
