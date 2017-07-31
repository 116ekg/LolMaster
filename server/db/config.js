const Sequelize = require('sequelize')

const db = new Sequelize('postgres://skugxhjk:D5LvwMq8ZkwUfU_QBBMYAmrl_PY1sTOc@babar.elephantsql.com:5432/skugxhjk', {
  dialect: 'postgres'
})
console.log('now connected to remote db!')

module.exports = db