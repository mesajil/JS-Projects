const express = require('express')
const { updateMyList, getMyList } = require('../controllers/handleList')
const router = express.Router()


router.get('/', getMyList)
router.post('/', updateMyList)


module.exports = router