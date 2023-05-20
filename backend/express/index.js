
const express = require('express')
const morgan = require('morgan') // printer
const routerPost = require('./routes/save')

// Set up my server and middleWares
const app = express()
const port = 3001
app.use(morgan('dev'))
app.use(express.json())
app.use('/save', routerPost) // Post module

// Home
app.get ('/', (req, res) => {
    res.send("Home")
})


// Post
app.post ('/post', (req, res) => {
    res.send("?????????")
})


/**
 * 'a' is optional
 * 'b' and 'c' are required, but between 'b' and 'c' can be anything
 */
app.get ('/a?b*c', (req, res) => {
    res.send("abc")
})


// Object 'params'
app.get ('/user/:id', (req, res) => {
    
    const db = [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
    ]

    const {id} = req.params
    const user = db.find(e => e.id == id)
    res.status(200).send(user) // send as a json

})


/**
 * Object 'query':
 * Query example: /form?name=luis&lname=smith
 */
app.get ('/form', (req, res) => {
    
    const {name, lname} = req.query;
    res.send(`My name is ${name} ${lname}`)
})





app.listen(port, () => console.log(`app listening on port ${port}`))