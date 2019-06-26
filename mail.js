const nodemailer = require('nodemailer');

module.exports = {
    mail: function() {
        //let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for all others
            auth: {
                //user: testAccount.user,
                //pass: testAccount.pass
                user: '',
                pass: ''
            }
        });

        let info = transporter.sendMail({
            from: 'food',
            to: "",
            subject: "hello",
            text: "World"
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return('yo');
    }
}