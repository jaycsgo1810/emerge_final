const Feedback = require("../models/feedback");

const getallfeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    return res.send(feedback);
  } catch (error) {
    res.status(500).send("Unable to get all Feedback");
  }
};

const addNewFeedback = async (req, res) => {
  try {
    const newFeedback = new Feedback({ 
      userId: req.locals, 
      name: req.body.name, 
      email: req.body.email, 
      feedback: req.body.feedback
    });
    
    // Save the Feedback to the database
    await newFeedback.save();

    res.status(201).send(newFeedback);
  } catch (error) {
    console.error('Error adding Feedback:', error);
    res.status(500).send('Unable to add Feedback');
  }
};


module.exports = {
  getallfeedback,
  addNewFeedback
};
