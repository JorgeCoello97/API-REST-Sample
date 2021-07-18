'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true},(err, res) => {
    if(err) {
        return console.log(`Error connecting to database: ${err}`)
    }
    console.log("DB Connection established")

    app.listen(config.port, () => {
        console.log(`API REST running on http://localhost:${config.port}`);
    })
})