'use strict'
const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3002

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//LISTENERS
app.get('/api/product', (req, res) => {
    res.status(200).send({products: []})
})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'The product have been received'})
})

app.get('/api/product/:productId', (req, res) => {

})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

app.listen(port, () => {
    console.log(`API REST running on http://localhost:${port}`);
})
