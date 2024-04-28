// This is the route handler for sending emails.

import { config } from 'dotenv'; // It is from .env file and used for the 'pass' below 
import { Router } from 'express';
import nodemailer from 'nodemailer';

config();

const router = Router();

router.post('/send-email', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'larryandsea@gmail.com', 
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: 'larryandsea@gmail.com',
        to: req.body.email,
        subject: 'Capacity Notification',
        text: 'Hi there,\n\n' + req.body.buildingName + ' has occupancy over 200.' + 'The current occupancy is: ' + req.body.currentOccupancy
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            console.log('@@@Email sent: ' + info.response);
            res.status(200).send('@@@Email sent: ' + info.response);
        }
    });
});

export default router;