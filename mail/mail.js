require('dotenv').config()
const nodemailer = require('nodemailer');
function sendEmail(to,otp) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tripathiaman777@gmail.com',
            pass: process.env.EMAILPASSWORD
        }
    });
    var str = "your otp = ";
    var a =otp;
    str+=a;
    str += "\notp valid till 2min"
    var mailOptions = {
        from: 'tripathiaman777@gmail.com',
        to: to,
        subject: 'Reset Password Pizza Hunt',
        text: str
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("hello error is coming");
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendEmail