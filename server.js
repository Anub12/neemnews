const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')


const app = express();


// set view engine
app.set('views', path.join(__dirname, 'views'));   
app.set('view engine', 'ejs');

//This body-parser is must if you want to pass data from frontend to backend using req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//routing
const commonnews = require('./routes/commonnews')
app.use('/commonnews', commonnews);

//server starting
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

