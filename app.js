const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/cart'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const itemsRouter = require('./routes/items')
app.use('/items',itemsRouter)

app.listen(8000, () => {
    console.log('Server started')
})