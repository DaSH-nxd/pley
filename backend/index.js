const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const yelp = require('./routes/yelp');
const InitiateMongoServer = require('./config/db');


// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

/**
 * Router Middleware
 * Router = /user/*
 * Method - *
 */
app.use('/user', user);

/**
 * Router = /user/*
 * Method - *
 */
app.use('/yelp', yelp);


app.get('/', (req, res) => {
    res.json({ message : 'API Working' });
});

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});