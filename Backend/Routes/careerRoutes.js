const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });


router.post("/email", upload.single("resume"), async (req, res) => {
    
    try {
        
        const { name, email, phone, designation, dob, address, expected_salary, last_salary } = req.body;
        const transporter = nodemailer.createTransport({
            
            service: "gmail",
            auth: { user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD },
        });

        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: "Career Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDesignation: ${designation}\nDOB: ${dob}\nAddress: ${address}\nExpected Salary: ${expected_salary}\nLast Salary: ${last_salary}`,
            attachments: req.file ? [{ filename: req.file.originalname, content: req.file.buffer }] : [],
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ message: "Error sending email" });
    }
});

module.exports = router;