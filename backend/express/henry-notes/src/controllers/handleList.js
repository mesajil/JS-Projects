const { myList } = require('../utils')

const getMyList = (req, res) => {
    return res.status(200).json(myList)
}

const updateMyList = (req, res) => {
    myList.push(req.body)
    res.status(200).json(myList)
}


module.exports = {
    getMyList,
    updateMyList,
}