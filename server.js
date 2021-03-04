const express = require('express')

const projects = require('./router/projectrouter') //CHANGE321
const resources = require('./router/resourcerouter')
const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/projects', projects) //CHANGE321
server.use('/api/resources', resources)

server.get('/', (req, res) => {
  res.status(200).json({ Victor_Frankenstein: 'It LIVEEEESSSSSSS' })
})

module.exports = server

