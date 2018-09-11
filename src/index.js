const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/mevn-database', { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error)

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/tasks', require('./routes/tasks'))

// static files
app.use(express.static(__dirname + '/public'))

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})