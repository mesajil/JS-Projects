const express = require('express')
const routerPost = express.Router()



/**
 * we need a middle ware express.json() to parse json to obj
 * Route: /save/
 */
let db = []
routerPost.post('/', (req, res) => {
    db.push(req.body)
    res.send(db)
})


module.exports = routerPost;