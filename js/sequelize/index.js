const models = require('../../models');
const moment = require('moment');
const Op = models.Sequelize.Op;

const transactionTest1 = async () => {
    return models.Post.findAll({
        where: { authorId: 12, status: 'active' }
    })
}

const transactionTest2 = async () => {

    const now = moment().format('YYYY-MM-DD HH:mm:ss')

    return models.CategoryPage.findOne({
        where: {
            category_id: 5,
            show_at: {
                [Op.or]: [
                    { [Op.eq]: null },
                    { [Op.gte]: now }
                ]
            },
            hide_at: {
                [Op.or]: [
                    { [Op.eq]: null },
                    { [Op.lte]: now }
                ]
            }
        },
        order: [['updated_at', 'DESC']]
    })
}


module.exports = {
    transactionTest1,
    transactionTest2
}



