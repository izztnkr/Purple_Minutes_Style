const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Production extends Model {} 

Production.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        production_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        production_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        production_dates: {
            type: DataTypes.STRING,
            allowNull: false
        },
        production_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        production_description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'production'
    }
);

module.exports = Production;