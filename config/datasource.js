import Sequelize from 'sequelize';

const sequelizeConnection = new Sequelize('mysql://root:root@localhost:3306/restify-sequelize-example');

sequelizeConnection.authenticate().then(() => {
    console.log('Connection has been established successfully!');
}).catch((err) => {
    console.log('Can\'t establish database connection:\n' + err);
});

let db = {
    sequelize: sequelizeConnection,
    Sequelize: Sequelize
};

export default db;