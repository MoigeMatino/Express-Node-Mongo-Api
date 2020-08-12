const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require ('./routes/courses');
const instructorRoutes = require ('./routes/instructor');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth/AuthController');


require('./db.js');

const app = express();

//TODO: read more on middlewares
// middlewares
app.use (bodyParser.json());
app.use('/courses',courseRoutes);
app.use('/instructors',instructorRoutes);
app.use('/api/user',authRoutes);


app.listen(5500);