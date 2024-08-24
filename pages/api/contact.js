// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or any other email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email user
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'mosesajila@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    // Handles any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
