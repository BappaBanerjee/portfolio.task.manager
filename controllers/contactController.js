const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'SendinBlue', // no need to set host or port etc.
    auth: {
        user: process.env.sendinblue_email,
        pass: process.env.sendinblue_password
    }
});

const mailOptions = {
    from: 'bappa3727@gmail.com', // sender address
    to: "dhirajjaiswal044@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
};

const mailer = asyncHandler(async (req, res) => {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({
                msg: "email sent successful"
            })
        }
    });
})

module.exports = {
    mailer
}
