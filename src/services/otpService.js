import transporter from '../config/nodemailerconfig.js';

const sendOtp = async (recipientEmail, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  await transporter.sendMail(mailOptions);
};

export default { sendOtp };
