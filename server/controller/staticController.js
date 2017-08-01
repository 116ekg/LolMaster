const db = require('../db')
const Sequelize = require('sequelize')

module.exports = {
  findStaticData: (req, res) => {
  db.Static.findOrCreate({
    where: {
      name: req.body.name
    }
  })
    .spread((static, created) => {
      console.log('found existing static data')
      if (created) {
        res.status(200).send(static)
      } else {
        res.status(200).send(static)
      }
    })
    .catch(err => {
      res.status(500).send(err)
      console.log('error finding static data')
    })
  }
}