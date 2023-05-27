const express = require('express')
const morgan = require('morgan') // printer
const listRouter = require('./listRouter')
const server = express()


// MiddleWares
server.use(morgan('dev'))
server.use(express.json()) // Every request to json

// My middleware
server.use ("/", (req, res, next) => {
    console.log(`REQUEST URL: ${req.url}`); // logger
    next() // Don't wait for a res method call.
})

// Use routers
server.use('/list', listRouter)

// GET method
server.get('/', (req, res) => {
    res.send("Home")
})


// POST method
server.post('/post', (req, res) => {
    res.send("?????????")
})


/**
 * 'a' is optional
 * 'b' and 'c' are required, but between 'b' and 'c' can be anything
 */
server.get('/a?b*c', (req, res) => {
    res.send("abc")
})


// Object 'params'
// Example: /api/:name/:lname
server.get('/user/:id', (req, res) => {

    const db = [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
    ]

    const { id } = req.params
    const user = db.find(e => e.id == id)
    res.status(200).send(user) // send as a json

})


/**
 * Object 'query':
 * Query example: /form?name=luis&lname=smith
 */
server.get('/form', (req, res) => {

    const { name, lname } = req.query;
    res.send(`My name is ${name} ${lname}`)
})



module.exports = server

