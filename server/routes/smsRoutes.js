const express = require('express');
const router = express.Router();
const axios = require('axios');

// Mocked data for demonstration purposes
const contacts = [
  { name: 'John', number: '+1234567890' },
  { name: 'Jane', number: '+1987654321' }
];

router.post('/send-sms', async (req, res) => {
  try {
    // Iterate through contacts and send SMS to each using Pushbullet API
    for (const contact of contacts) {
      await sendSMSToContact(contact.name, contact.number);
    }
    
    res.status(200).send('SMS sent to all contacts successfully.');
  } catch (error) {
    console.error('Error sending SMS to all contacts:', error);
    res.status(500).send('Failed to send SMS to all contacts.');
  }
});

async function sendSMSToContact(name, number) {
  try {
    // Replace 'YOUR_ACCESS_TOKEN' with your Pushbullet access token
    const accessToken = 'YOUR_ACCESS_TOKEN';

    // Define the message to be sent
    const message = {
      type: 'note',
      title: `Hello ${name}`,
      body: 'This is a test SMS message from your application.'
    };

    // Send the SMS using Pushbullet API
    await axios.post('https://api.pushbullet.com/v2/pushes', message, {
      headers: {
        'Access-Token': accessToken
      }
    });
  } catch (error) {
    console.error(`Error sending SMS to ${name}:`, error);
    throw error;
  }
}

module.exports = router;
