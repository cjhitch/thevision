require('dotenv').config();
const nodemailer = require('nodemailer');

const email = process.env.MAILER_EMAIL_ID || 'auth_email_address@gmail.com';
const pass = process.env.MAILER_PASSWORD || 'auth_email_pass';

export default (req, res) => {
	const { name, email, text } = req.body;

	const transporter = nodemailer.createTransport({
		service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
		auth: {
			user: email,
			pass,
		},
	});

	const mailOption = {
		from: `${email}`,
		to: `${process.env.EMAIL}`,
		subject: `New mail from ${email}`,
		text: `
    ${name} wrote:
    ${text}
    `,
	};

	transporter.sendMail(mailOption, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log('mail send');
			res.send('success');
		}
	});

	console.log(name, email, text);
};
