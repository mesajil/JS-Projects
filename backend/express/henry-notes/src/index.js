const express = require('express')
const morgan = require('morgan') // printer
const { PORT } = require('./constants')
const { router } = require('./routes')

// Set up my server and middleWares
const server = express()
server.use(morgan('dev'))
server.use(express.json()) // ?

// Routers
server.use('/add', router)

// Home
server.get('/', (req, res) => {
    res.send("Home")
})


// Post
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





server.listen(PORT, () => console.log(`server listening on port ${PORT}`))