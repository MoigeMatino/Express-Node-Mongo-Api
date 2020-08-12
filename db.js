const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


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
});

