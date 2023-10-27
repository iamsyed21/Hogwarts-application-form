import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// Did not seprate controller and model as it is only a single route
app.post('/sendemail', async (req, res) => {
  // Honeypot validation
  if (req.body.honeypot) {
    return res.status(400).json({ message: 'Bot detected' });
  }



  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });



  const mailOptions = {
    from: 'syedmoinahmed01@gmail.com',
    to: req.body.email,
    subject: 'Your Hogwarts Application Form!',
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nAge: ${req.body.age}\nGender: ${req.body.gender}\nPreffered House: ${req.body.house}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// simple request to avoid extreme 'time-to-first byte'
app.get('/wakeup', (req, res) => {
    res.status(200).json({ message: 'Server is awake' });
  });


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
