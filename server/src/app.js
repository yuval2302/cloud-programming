const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.send('Hello World!')
    console.log("ohad");
    res.status(200).send("hello")
});

app.get('/order', (req, res) => {
    let sql = "SELECT * from orders;";
    res.send('Hello World!')
});

app.post('/order', (req, res) => {
    let newOrder = req.body;
    // order number and date
    let sql = `INSERT INTO orders VALUES ();`;
    res.send('Hello World!')
});

app.get('/product', (req, res) => {
    let sql = "SELECT * from products;";
    res.send('Hello World!')
});

app.post('/product', (req, res) => {
    let newProduct = req.body;
    // name, amount and cost
    let sql = `INSERT INTO product VALUES ();`;
    res.send('Hello World!')
});

app.delete('/product', (req, res) => {
    let productToDelete = req.params;
    // product id
    let sql = `DELETE FROM product WHERE id = ${productToDelete};`;
    res.send('Hello World!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sqlQuery = "";
//     con.query(sqlQuery, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });
// });

