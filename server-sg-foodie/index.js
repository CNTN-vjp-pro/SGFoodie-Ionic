const express = require('express')
const app = express()
const port = 3000
const path = require('path');
// const jwt = require('./_helpers/jwt');
// const jwt = require('express-jwt')
const errorHandler = require('./_helpers/error-handlers');

// connect db
const db = require('./config/db')
db.connect()

// use JWT auth to secure the api
// app.use(jwt());

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

// api routes
app.use('/users', require('./routes/user.router'));

// global error handler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})