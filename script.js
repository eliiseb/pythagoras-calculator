const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(express.urlencoded ());

app.get('/', function (req, res) {
    let name = req.query.name;
    let age = req.query.age;
    res.render('calculate.njk', {name, age});
});

app.post('/answer', function (req, res) {
    let name = req.body.name;
    let age = req.body.age;
    res.render('answer.njk', {name, age});
});

/* Calculates hypotenuse on form submit action */
app.post('/a', function (req, res) {
    let a = req.body.a; //Triangle side A
    let b = req.body.b; //Triangle side B
    let c = Math.sqrt(a * a + b * b);
    res.render('answer.njk', { a, b, c });
});

app.listen(3000); // Server is listening on localhost port 3000
console.log('Server stared on http://localhost:3000');
