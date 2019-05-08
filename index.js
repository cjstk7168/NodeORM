const mysql = require('./js/mysql');
const knex = require('./js/knex');
const sequelize = require('./js/sequelize');

const main = async () => {

    // Knex
    console.time("Knex transaction 1")
    await knex.transactionTest1()
    console.timeEnd("Knex transaction 1")

    console.time("Knex transaction 2")
    await knex.transactionTest2()
    console.timeEnd("Knex transaction 2")


    // MySQL
    console.time("MySQL transaction 1")
    await mysql.transactionTest1()
    console.timeEnd("MySQL transaction 1")

    console.time("MySQL transaction 2")
    await mysql.transactionTest2()
    console.timeEnd("MySQL transaction 2")


    // Sequelize
    console.time("Sequelize transaction 1")
    await sequelize.transactionTest1();
    console.timeEnd("Sequelize transaction 1")

    console.time("Sequelize transaction 2")
    await sequelize.transactionTest2();
    console.timeEnd("Sequelize transaction 2")

}

main()


/* console --

Knex transaction 1: 58.943ms
Knex transaction 2: 4.079ms
MySQL transaction 1: 0.839ms
MySQL transaction 2: 0.297ms
Sequelize transaction 1: 33.345ms
Sequelize transaction 2: 6.624ms


 */