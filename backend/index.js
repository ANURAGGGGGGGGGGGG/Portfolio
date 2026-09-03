require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-gacg.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["POST", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO],
      subject: `New message from ${name} (Portfolio)`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});