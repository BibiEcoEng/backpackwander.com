import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter using Namecheap SMTP
const transporter = nodemailer.createTransport({
  host: process.env.NAMECHEAP_SMTP_HOST || 'mail.privateemail.com',
  port: process.env.NAMECHEAP_SMTP_PORT || 587,
  secure: process.env.NAMECHEAP_SMTP_SECURE === 'true' ? true : false,
  auth: {
    user: process.env.NAMECHEAP_EMAIL || 'info@backpackwander.com',
    pass: process.env.NAMECHEAP_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Disable strict SSL verification for testing
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Email to company
    const mailOptions = {
      from: process.env.NAMECHEAP_EMAIL || 'info@backpackwander.com',
      to: process.env.NAMECHEAP_EMAIL || 'info@backpackwander.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    const confirmationEmail = {
      from: process.env.NAMECHEAP_EMAIL || 'info@backpackwander.com',
      to: email,
      subject: 'We Received Your Message - Backpack Wander GmbH',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${escapeHtml(name)},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <p><em>Subject:</em> ${escapeHtml(subject)}</p>
        <p><em>Message:</em></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Backpack Wander GmbH</p>
      `,
    };

    try {
      await transporter.sendMail(confirmationEmail);
    } catch (err) {
      console.error('Error sending confirmation email:', err);
      // Don't fail the request if confirmation email fails
    }

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      error: 'Failed to send email. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});

// Utility function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
