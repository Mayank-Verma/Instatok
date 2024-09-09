import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass:  process.env.EMAIL_PASS
    },
    secure: true,
  });

export default transporter;
