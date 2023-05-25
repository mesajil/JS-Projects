const { getUsersByName, getUsers, createNewUser, deleteUser, updateUser } = require('../controllers/user')
const router = require('express').Router();



router.post('/', (req, res) => {
    try {
        res.status(200).json(createNewUser(req.body))
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/', (req, res) => {

    const { name } = req.query
    if (!name) return res.status(200).json(getUsers())
    const usersFound = getUsersByName(name)
    return res.status(usersFound.error ? 404 : 200).json(usersFound)
})


router.put('/update', (req, res) => {
    const user = updateUser(req.body)
    return res.status(user.error ? 404 : 200).send(user)
})


router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const user = deleteUser(Number(id))
    return res.status(user.error ? 404 : 200).send(user)
})




module.exports = router
