const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

//Global middleware for every request
app.use(express.json()) //creates req.body


mongoose.connect(
    'mongodb://localhost:27017/blog-project', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
    console.log("Connected to the Database")
})

//Use authentication middleware on anything using "/api" route
app.use('/api', expressJwt({secret: process.env.SECRET}));

// this is to make it so the admin is able to post, put, and delete things
app.use('/api/blogs', require('./routes/blogRoutes.js'))

app.use('/auth', require('./routes/auth'))

app.use((err, req, res, next) => {
    console.error(err)
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status)
    }
    return res.send({ message: err.message });
})


app.listen(6069, () => console.log('Server is running on port 6069'))