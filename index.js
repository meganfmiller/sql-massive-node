var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
require('dotenv').config()
var productsController = require('./controllers/products_controller')

var app = express();

app.use(bodyParser.json());
app.use(cors());

var port = 3000;

app.post('/api/product', productsController.create)
app.get('/api/products', productsController.getAll)
app.get('/api/product/:id', productsController.getOne)
app.put('/api/product/:id', productsController.update)
app.delete('/api/product/:id', productsController.delete)





massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, function () {
        console.log(`We have ears on port ${port}!`)
    })
})

