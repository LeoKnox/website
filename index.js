const express = require('express');
const app = express();
const path = require('path');
const mailer = require('./mail');

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
    mailer.mail();
    res.redirect('mail');
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})