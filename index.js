const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/mail', (req, res)  => {
    res.render('mail');
})

app.post('/mail', (req, res) => {
    let fakeAccount = nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        secure: 'true', // true for 465, false for other ports
        port: '465',
        auth: {
            user: fakeAccount.user,
            pass: fakeAccount.pass
        }
    })
    let info = transporter.sendMail({
        from: '"Fluffy Links" <foo@example.com>',
        to: "one@two.com, two@one.com",
        subject: "Hello",
        text: "Hello worlds"
    })
    console.log("Message sent:  %s", info.messageId);
    console.log("preview url: %s", nodemailer.getTestMessageUrl(info));
    res.redirect('mail');
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})