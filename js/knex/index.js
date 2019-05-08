const moment = require('moment');
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : "localhost",
        user : "test",
        password : "test",
        database : "test"
    }
})

const transactionTest1 = async () => {

    const data = await knex("post").select()
        .where({ authorId: 12, status: 'active'});

    // console.log('... time : ' + moment.duration(endTime.diff(startTime)).asMilliseconds())
    // console.log('data.length : ' + data.length);
}

const transactionTest2 = async () => {
    const now = moment();

    await knex("category_page")
        .where({ category_id: 5 })
        .where(b => b.whereNull('show_at').orWhere('show_at', '>=', moment(now).toDate()))
        .where(b => b.whereNull('hide_at').orWhere('hide_at', '<=', moment(now).toDate()))
        .orderBy('updated_at', 'desc')
        .first()
        .then((data) => {
            // console.log("test2 data : " + data.length)
        })
        .catch(err => {
            console.log('err : ' + err)
        })




}


module.exports = {
    transactionTest1,
    transactionTest2
}



