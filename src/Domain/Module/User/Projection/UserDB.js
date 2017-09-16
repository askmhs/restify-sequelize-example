import Sequelize from 'sequelize';

module.exports = (sequelize) => {
    return sequelize.define('User', {
        id: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            validate: {
                len: [0, 40]
            }
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 50]
            }
        },
        birthDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
        },
        address: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 15]
            }
        }
    }, {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    });
};