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
    host: "storeclientdb.cala6uvyezje.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Aa123456",
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.send('Hello World!')
    console.log("ohad");
    res.status(200).send("hello")
});

app.get('/order', (req, res) => {
    let sql = "SELECT * from ORDERS;";
    mysql.createQuery(sql, (val) => {
        res.send(val)
    });
    let orders = [
        {
            id: 1,
            date: '08.02.2020'
        },
        {
            id: 2,
            date: '05.02.2020'
        },
        {
            id: 3,
            date: '07.02.2020'
        }
    ];
    res.send(orders);
});

app.post('/order', (req, res) => {
    let newOrder = req.body;
    // order number and date
    let sql = `INSERT INTO ORDERS VALUES ();`;
    console.log("save new order");
    let orders = [
        {
            id: 1,
            date: '08.02.2020'
        },
        {
            id: 2,
            date: '05.02.2020'
        },
        {
            id: 3,
            date: '07.02.2020'
        },
        {
            id: 4,
            date: '12.02.2020'
        }
    ];
    res.send(orders);
});

app.get('/product', (req, res) => {
    let sql = "SELECT * from PRODUCTS;";
    let products = [
        {
            'id': '9aa113b4-1e4e-4cde-bf9d-8358fc78ea4f',
            'price': 3.50,
            'name': 'Greens',
            'quantity': 2,
            'description': 'Looking for simple, clean and green? Four of the most nutrient dense leafy greens create the base in our low-sugar Greens 1.'
        },
        {
            'id': 'bdcbe438-ac85-4acf-8949-5627fd5b57df',
            'price': 2.75,
            'name': 'Citrus',
            'quantity': 3,
            'description': 'This enzyme rich juice is filled with phytonutrients and bromelin which helps to reduce inflammation. Drink it before a meal to get digestive juices flowing.'
        },
        {
            'id': '58552daa-30f6-46fa-a808-f1a1d7667561',
            'price': 3,
            'name': 'Roots',
            'quantity': 1,
            'description': 'Beets help your body to release stomach acid which aids digestion! Drink this juice when you want a snack that\'s both pretty and nutritious!'
        },
        {
            'id': 'd4666802-fd84-476f-9eea-c8dd29cfb633',
            'price': 1.99,
            'name': 'Orange',
            'quantity': 10,
            'description': 'Orange juice with a twist to boost you health!'
        },
        {
            'id': '7ef3b9dd-5a95-4415-af37-6871d6ff0262',
            'price': 2.50,
            'name': 'Coconut',
            'quantity': 20,
            'description': 'Cinnamon lovers - this is your blend! Two nutritional powerhouses combine in a delicious, satiating elixir. Both cinnamon and coconut have been shown to reduce blood sugar. Raw coconut meat is a great source of medium chain fatty acids, which can lower bad cholesterol. Coconut also contains significant levels of fiber and manganese, a mineral that helps you metabolize fat and protein.'
        }
    ];

    res.send(products);
});

app.post('/product', (req, res) => {
    let newProduct = req.body;
    // name, amount and cost
    let sql = `INSERT INTO PRODUCTS VALUES ();`;
    res.send('Hello World!')
});

app.post('/product/delete', (req, res) => {
    let productId = req.body;
    // product id
    let sql = `DELETE FROM PRODUCTS WHERE id = ${productId};`;
    res.send('Hello World!')
});

// app.delete('/product', (req, res) => {
//     let productToDelete = req.params;
//     // product id
//     let sql = `DELETE FROM product WHERE id = ${productToDelete};`;
//     res.send('Hello World!')
// });

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

