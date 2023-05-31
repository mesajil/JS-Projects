const server = require('./app/routes')
const PORT = 3001
const { database } = require('./db')

server.listen(PORT, async () => {
    try {

        // synchronize all models
        await database.sync(
            { force: true }
        )
        console.log('All models were synchronized successfully.')
        console.log(`Listening on port ${PORT}`);
        

    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
})