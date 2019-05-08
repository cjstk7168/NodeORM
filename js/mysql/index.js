var mysql = require('../../libs/db');

const transactionTest1 = async () => {

    const conn = await mysql.connect()

    const sql = "SELECT * FROM post WHERE authorId = 12 AND status = 'active'";
    await conn.query(sql);
    await mysql.disconnect(conn);
};

const transactionTest2 = async () => {

    const conn = await mysql.connect()

    const sql = "select * from category_page where category_id = 5 and (show_at is null or show_at >= now()) and (hide_at is null or hide_at <= now()) order by updated_at desc limit 1";
    await conn.query(sql);
    await mysql.disconnect(conn);
};

module.exports = {
    transactionTest1,
    transactionTest2
}



