var mysql = require('mysql');
var pool;

const connect = async () => {

    return pool = await mysql.createConnection({
        host	 : 'localhost',
        user	 : 'test',
        password : 'test',
        database : 'test'
    })

};

const disconnect = async (conn) => {

    await pool.end((err) => {
        // console.log("Disconnect.");
    });
}

module.exports = {
    connect,
    disconnect
};
