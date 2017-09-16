import connectDB from './../../../config/datasource';

export default (callback) => {
    let conn = connectDB;

    conn.User = conn.sequelize.import('./../Module/User/Projection/UserDB.js');

    callback(conn);
}