const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Temporary email generation endpoint
app.post('/generate-email', (req, res) => {
    const email = `temp-email-${Date.now()}@tempmail.com`;
    res.json({ email });
});

// Inbox management endpoints
app.get('/inbox/:email', (req, res) => {
    const email = req.params.email;
    // Logic to retrieve inbox for the specified email
    res.json({ email, messages: [] }); // Replace with actual messages
});

// Mailgun webhook handler
app.post('/webhook/mailgun', (req, res) => {
    const eventData = req.body;
    // Logic to handle Mailgun events
    console.log('Mailgun event received:', eventData);
    res.sendStatus(200);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
