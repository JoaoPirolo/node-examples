let express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express();

app.set('views', path.join(__dirname, 'app/view'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/mensagem_get', (req, res) => {
    console.log(req.query);
    res.end();
});

http.createServer(app).listen(3000);
