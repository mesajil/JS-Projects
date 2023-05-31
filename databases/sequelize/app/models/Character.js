const { DataTypes } = require('sequelize');

const STATUS = ['Alive', 'Dead', 'unknown']
const GENDER = ['Female', 'Male', 'Genderless', 'unknown']

module.exports = (database) => {
    database.define(
        'Character',
        { // Model attributes
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM(STATUS),
                allowNull: false,
            },
            species: {
                type: DataTypes.STRING,
            },
            type: {
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.ENUM(GENDER),
                allowNull: false,
            },
            origin: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            episode: {
                type: DataTypes.STRING,
            },
            url: {
                type: DataTypes.STRING,
            },
            created: {
                type: DataTypes.DATE,
            },
        },
        { // Other model options

        }
    )
}


