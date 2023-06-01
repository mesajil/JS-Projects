const { Sequelize } = require('sequelize')
const User = require('./app/models/User')
const Character = require('./app/models/Character')

require('dotenv').config()
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

// Connection to a database

const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, }
)

// Create models
User(database)
Character(database)

// Associations


// Testing the connection
database.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error.message);
    })



module.exports = {
    database,
    ...database.models, // Export instances
};


