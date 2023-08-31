import dotenv from 'dotenv'
dotenv.config()
import Contact from "../models/contact.js";
import nodemailer from 'nodemailer'

function capitalizeEachWord(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
}

export const formSubmit = async (req, res) => {
    try {
        const { name, email, subject, message, files } = req.body;
        if (!name || !email || !subject || !message) return res.status(400).json({ message: `name, email, subject, message fields are required` })

        const html = `
            <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
                <h2 style="color: #0077c0;">Portfolio Contact Form Submission</h2>
                <hr style="border: 0; border-top: 1px solid #0077c0;">
                <p><strong>Name:</strong> ${capitalizeEachWord(name)}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${capitalizeEachWord(subject)}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.SENDER_EMAIL, pass: process.env.SENDER_EMAIL_PASSWORD }
        });
        const mailOptions = {
            from: email,
            to: process.env.SENDER_EMAIL,
            subject: `${capitalizeEachWord(name)} Contacted You`,
            html: html
        };

        const info = await transporter.sendMail(mailOptions);       // console.log the info (for detail)

        if (info.accepted.length > 0) {
            const contact = await Contact.create({ name, email, subject, message ,files });
            res.status(200).json({ result: contact, success: true, message: 'contact user createad successfully' })
        }

    } catch (error) {
        res.status(500).send('An error occurred while sending the email.');
    }
};
