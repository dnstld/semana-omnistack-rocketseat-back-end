const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://rocketseatapirest:rocketseatapirest123@ds051605.mlab.com:51605/rocketseat-api-rest', { useNewUrlParser: true })

app.use((req, res, next) => {
  req.io = io
  
  return next()
})
app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => {
  console.log('Server started on port 3000')
})