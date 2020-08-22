const express = require('express');
const app = express();
const session = require("express-session")
const MongoStore = require('connect-mongo')(session)
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')
const cors = require('cors');

const mongoose = require('mongoose')
const passport = require('./passport/setup')
const auth = require("./helpers/auth")

require('dotenv').config();

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// const mongoDB = 'mongodb://localhost:27017/bird_spotter';
const mongoDB = process.env.DB_CONNECTION_STRING

mongoose
 .connect(mongoDB, { useNewUrlParser: true })
 .then(console.log("db loaded"))
 .catch(err => console.log(err))

app.use(
  session({
    secret: "a secret",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/", auth)


// /REGULAR ROUTES
app.use(parser.json());

// MongoClient.connect('mongodb://localhost:27017')
MongoClient.connect(mongoDB)
  .then((client) => {
    const db = client.db('bird_spotter')
    let spotterCollection = {};
    spotterCollection.users = db.collection('users')
    spotterCollection.birds = db.collection('birds')
    spotterCollection.sightings = db.collection('sightings')
    
    const birdRouter = createRouter(spotterCollection)
    app.use('/', birdRouter)
  })
  .catch(console.error)




 app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});






