'use strict'
const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3002

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//LISTENERS
app.get('/hola/:name', (request, response) => {
    response.send({message: `Hola ${request.params.name}`})
})
app.get('/hola', (request, response) => {
    response.send({message: 'Hola'})
})

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
})
