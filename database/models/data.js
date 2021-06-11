const { DataTypes } = require('sequelize');
const sequelize = require('../dbconnection');

const users = sequelize.define('users', {
    id: {
        field: 'userid',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        field: 'email',
        type: DataTypes.TEXT,
        allowNull: false,
        isEmail: true,   
        validate: {
            notEmpty:{
                args: true,
                msg: "Email Address is Required"
            },
            len: {
                args: [13, 25],
                msg: "Email address must be between the range of 13 to 25 Characters"
            }
        }
    },
    password: {
        field: 'password',
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty:{
                args: true,
                msg: " Password is Required"
            },
            len: {
                args: [6, 8],
                msg: "Password must be between the range of 6 to 8 Characters"
            }
        }
    }
});

const shapes = sequelize.define('shapes', {
    id: {
        field: 'shapeid',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        field: 'email',
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true, 
        validate: {
            notEmpty:{
                args: true,
                msg: "Email Address is Required"
            },
            len: {
                args: [13, 25],
                msg: "Email address must be between the range of 13 to 25 Characters"
            }
        }
    },
    shapetype: {
        field: 'shapetype',
        type: DataTypes.STRING,
        allowNull: false
    },
    payload: {
        field: 'payload',
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        field: 'area',
        type: DataTypes.INTEGER,
    }
});

// async function testDb(){
// 	try {
// 		await sequelize.authenticate();
// 		console.log('Connection has been established successfully.');
// 	  } catch (error) {
// 		console.error('Unable to connect to the database:', error);
// 	  }
// }

// testDb();

module.exports = {shapes, users}
