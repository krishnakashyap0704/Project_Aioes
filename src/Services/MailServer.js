const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kashyapanish11@gmail.com',
        pass: 'afuxmqwnfaembrqe'
    }
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).send('All fields are required');
    }

    const mailOptions = {
        from: email,
        to: 'kashyapanish11@gmail.com',
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log error details
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
