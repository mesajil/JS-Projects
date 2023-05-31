const express = require('express')
const morgan = require('morgan')

const server = express()


// Middle wares
server.use(morgan('dev'))
server.use(express.json())

// Routes





module.exports = server




