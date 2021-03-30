require('dotenv').config();
const nodemailer = require('nodemailer');

const mailerEmail =
	process.env.NODE_ENV !== 'development'
		? process.env.MAILER_EMAIL_ID || 'auth_email_address@gmail.com'
		: process.env.VERCEL_MAILER_EMAIL_ID;
const mailerPass =
	process.env.NODE_ENV !== 'development'
		? process.env.MAILER_PASSWORD || 'auth_email_pass'
		: process.env.VERCEL_MAILER_PASSWORD;

export default (req, res) => {
	const { name, email, phone, subject, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
		auth: {
			user: mailerEmail,
			pass: mailerPass,
		},
	});

	const mailOption = {
		to: mailerEmail,
		from: email,
		subject: `New mail from ${email}`,
		text: `
		name: ${name}
		email: ${email}
		phone: ${phone}
		subject: ${subject}
		message: ${message}
		`,
	};

	transporter.sendMail(mailOption, (err, data) => {
		console.log('mailOption: ', mailOption);
		console.log('err: ', err);
		console.log('data: ', data);
		if (err) {
			console.log(err);
			res.status(500).send('error');
		} else {
			console.log('mail send');
			res.status(200).send('success');
		}
	});
};
