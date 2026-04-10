# Email Setup Guide - Namecheap SMTP

## Overview
The contact form now sends emails via your Namecheap email account using SMTP. Follow these steps to configure it.

## Prerequisites
- A Namecheap email address (like info@backpackwander.com)
- Access to your Namecheap account
- Node.js installed on your system

## Setup Steps

### 1. Get Your Namecheap SMTP Credentials

1. Log in to your Namecheap account
2. Navigate to **Email** → **Manage Email**
3. Find your email address (info@backpackwander.com)
4. Click on the email to view settings
5. Look for **IMAP/POP3/SMTP Settings** or **Email Configuration**
6. You'll find:
   - **SMTP Server:** mail.privateemail.com
   - **SMTP Port:** 587 (TLS) or 465 (SSL)
   - **Username:** Your full email address (info@backpackwander.com)
   - **Password:** Your Namecheap email password

### 2. Configure Your .env File

Open `.env` file in the project root and fill in:

```env
NAMECHEAP_SMTP_HOST=mail.privateemail.com
NAMECHEAP_SMTP_PORT=587
NAMECHEAP_SMTP_SECURE=false
NAMECHEAP_EMAIL=info@backpackwander.com
NAMECHEAP_EMAIL_PASSWORD=your_email_password_here
PORT=5000
NODE_ENV=development
```

**Important:** Replace `your_email_password_here` with your actual Namecheap email password.

### 3. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Backend server
- `nodemailer` - Email sending library
- `cors` - Cross-origin request handling
- `dotenv` - Environment variable management
- `concurrently` - Run multiple scripts simultaneously

### 4. Run the Application

You have two options:

**Option A: Run with Backend Server** (Recommended for development)
```bash
npm run dev:all
```
This runs:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

**Option B: Run Frontend Only** (if backend is hosted elsewhere)
```bash
npm run dev
```

**Option C: Run Backend Server Only**
```bash
npm run dev:server
```

## How It Works

1. **User fills in contact form** → Name, Email, Subject, Message
2. **Form is submitted** → Sent to `/api/contact` endpoint
3. **Backend server receives request** → Validates data
4. **Email is sent via Namecheap SMTP:**
   - **To:** info@backpackwander.com (your email)
   - **Reply-To:** User's email
   - Includes all form data
5. **Confirmation email sent** → To the user's email address
6. **Response sent back** → Frontend shows success/error message

## Features

✅ Email validation
✅ HTML formatted emails
✅ Plain text fallback
✅ Confirmation email to user
✅ Error handling
✅ Security (HTML escaping)
✅ CORS enabled for frontend communication

## Troubleshooting

### "Connection refused" error
- Make sure backend server is running: `npm run dev:server`
- Check that port 5000 is not in use

### "Invalid credentials" error
- Verify email and password in .env file
- Check Namecheap account for correct password
- Ensure SMTP settings match Namecheap configuration

### "Email sending failed"
- Check internet connection
- Verify firewall allows SMTP (port 587 or 465)
- Some ISPs block SMTP - try different port

### "CORS error"
- Backend server should handle CORS automatically
- Make sure backend server is running on localhost:5000
- Check that vite.config.js proxy is correctly configured

## Security Notes

⚠️ **Important:**
- Never commit .env file to git (it's in .gitignore)
- Keep your email password safe
- Use strong passwords
- Environment variables are only accessible on server-side

## Testing the Contact Form

1. Visit http://localhost:5173
2. Scroll to Contact section
3. Fill in form and submit
4. Check info@backpackwander.com for incoming email
5. Check user's email for confirmation message

## Email Content Customization

To customize email templates, edit `server.js`:
- Modify the `mailOptions` HTML template for company email
- Modify the `confirmationEmail` HTML template for user email

## Next Steps

1. Fill in .env file with Namecheap credentials
2. Run `npm install` to install dependencies
3. Run `npm run dev:all` to start development
4. Test the contact form
5. Deploy to production (ensure .env is set on server)

## Support

For Namecheap email configuration issues, visit:
https://www.namecheap.com/support/knowledgebase/

For code issues, check server.js or ContactUs.jsx components.
