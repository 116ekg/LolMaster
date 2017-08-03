const Sequelize = require('sequelize')
const DBcred = require('../../DBcred.js')

const db = new Sequelize(DBcred, {
  dialect: 'postgres'
})
console.log('now connected to remote db!')

module.exports = db