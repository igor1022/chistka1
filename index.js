const express = require('express');
const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.set('view engine', 'ejs');
server.set('views', './views');

server.use('/ru', (req, res, next) => {
    res.render('ru');
});

server.use('/thank', (req, res, next) => {
    res.render('thank');
});

server.use('/', (req, res, next) => {
    res.render('main');
});



server.use('*', (req, res) => {
    res.render('not_found');
})

server.listen(PORT);