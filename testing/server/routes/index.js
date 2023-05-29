const express = require('express')
const server = express()

server.use(express.json())


server.get('/', (req, res) => {
    res.status(300).json([
        'Franco',
        'Toni',
        'Mar',
    ])
})

server.post('/', (req, res) => {
    const { arg1, arg2 } = req.body
    if (!arg1 || !arg2) return res.sendStatus(400)
    res.status(200).send("OK")
})

server.get('/data', (req, res) => {
    const { bootcamp } = req.query
    if (!bootcamp) return res.sendStatus(400)
    res.status(200).send(bootcamp)
})

server.get('/json', (req, res) => {
    const { bootcamp } = req.query
    if (!bootcamp) return res.sendStatus(400)
    res.status(200).json(bootcamp)
})

server.get('/number/:id', (req, res) => {
    const number = Number(req.params.id)
    if (isNaN(number)) return res.sendStatus(400)
    res.status(200).json({ id: number, msg: "OK" })
})

server.get('/img', (req, res) => {
    res.status(200).sendFile(__dirname + "/closure.png")
})


module.exports = server