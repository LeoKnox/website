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
    let fakeAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        secure: 'true',
        port: '465',
        auth: {
            user: fakeAccount.user,
            pass: fakeAccount.pass
        }
    })
    res.redirect('mail');
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})