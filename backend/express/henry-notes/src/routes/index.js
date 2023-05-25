const express = require('express')
const router = express.Router()
const { myList } = require('../constants')

// Controllers
const controller = (req, res) => {
    myList.push(req.body)
    res.send(myList)
}


router.post('/', controller)


module.exports = {
    router,
};