const express = require('express')
const morgan = require('morgan')
const userRouter = require('./userRouter')

const server = express()

// Middle wares
server.use(morgan('dev'))
server.use(express.json()) // req to json

// Routers
server.get('/', (req, res) => {
    res.status(200).send("Hello World!")
})
server.use('/users', userRouter)


module.exports = server





