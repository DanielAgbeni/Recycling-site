import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;

		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS, // your email password (use app-specific password if 2FA is enabled)
			},
		});

		const mailOptions = {
			from: email,
			to: 'danielagbeni12@gmail.com', // your email address
			subject: `New message from ${name}`,
			text: message,
		};

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ success: true });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Error sending email' });
		}
	} else {
		res.status(405).json({ message: 'Only POST requests are allowed' });
	}
}
