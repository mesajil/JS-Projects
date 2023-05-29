const request = require('supertest')
const server = require('../../server/routes')

it(
    'Should reply the GET method with status 300',
    async () => {
        const res = await request(server).get('/')
        expect(res.statusCode).toBe(300)
    }
)

it(
    'Should reply the GET method with the list of names',
    async () => {
        const res = await request(server).get('/')
        expect(res.body).toEqual([
            'Franco',
            'Toni',
            'Mar',
        ])
    }
)

it(
    "Should reply the POST method with status 400",
    async () => {
        const res = await request(server).post('/')
        expect(res.statusCode).toEqual(400)
    }
)

it(
    "Should reply the POST method with status 200 and OK message",
    async () => {
        const res = await request(server).post('/').send({ arg1: "Hello", arg2: "World" })
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual("OK")
    }
)

it(
    "Should reply the GET method /data with status 400 if data is not sent",
    async () => {
        const res = await request(server).get("/data")
        expect(res.statusCode).toEqual(400)
    }
)

it(
    "Should reply the GET method /data with status 200 if data is sent and provided text",
    async () => {
        const res = await request(server).get("/data/?bootcamp=henry")
        expect(res.statusCode).toEqual(200)
        expect(res.text).toBe('henry')
    }
)

it(
    "Should reply the GET method /data with status 200 if data is sent and provided json",
    async () => {
        const res = await request(server).get("/json/?bootcamp=henry")
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBe('henry')
    }
)

it(
    "Should reply the GET method /number with status 400 if params is not a number",
    async () => {
        const res = await request(server).get("/number/henry")
        expect(res.statusCode).toEqual(400)
    }
)


it(
    "Should reply the GET method /number with status 200 if params is a number and provided OK text",
    async () => {
        const res = await request(server).get("/number/1")
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({
            id: 1,
            msg: "OK",
        })
    }
)

it(
    "Should reply the GET method /img with status 200 and content type image",
    async () => {
        const res = await request(server)
            .get("/img")
            .expect("Content-Type", "image/png")
        expect(res.statusCode).toEqual(200)
    }
)