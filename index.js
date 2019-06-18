const express = require('express');
const app = express();
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

app.listen(3000, () => {
    console.log('listening on port 3000')
})