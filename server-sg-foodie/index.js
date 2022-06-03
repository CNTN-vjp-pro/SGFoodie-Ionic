const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// connect db
const db = require('./config/db')
db.connect()

// path for images
app.use(express.static(path.join(__dirname, '/images')))

const cors = require('cors')
app.use(cors())

// Parsing data received from client
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// use Routes
const foodieRoutes = require('./routes/foodie.router')
app.use('/', foodieRoutes)


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})