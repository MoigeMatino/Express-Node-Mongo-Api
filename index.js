const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require ('./routes/courses');
const instructorRoutes = require ('./routes/instructor');
const bodyParser = require('body-parser');


require('dotenv/config');

const app = express();

app.get('/', (req, res) => {
    res.send('We are live!');
});

//TODO: read more on middlewares
// middlewares
app.use (bodyParser.json());
app.use('/courses',courseRoutes);
app.use('/instructors',instructorRoutes);

//mongoose url
const url = process.env.DB_CONNECTION;

//connecting to MongoDB
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true });

//checking if connection succeeds
const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


app.listen(4000);