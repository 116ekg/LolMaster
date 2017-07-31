const Sequelize = require('sequelize')
const db = require('../db')

module.exports = {
  fetchUser: (req, res) => {
    db.User.findAll({})
      .then(result => {
        console.log('successfully fetched all users')
        res.status(200).send(result)
      })
      .catch(err => {
        res.status(500).send(err)
        console.log('error fetching all users')
      })
  },
  createUser: (req, res) => {
    db.User.findOrCreate({
      where: {
        name: req.body.name
      }
    })
      .spread((newUser, created) => {
        console.log('found existing or made new user')
        res.status(200).send(newUser)
      })
      .catch(err => {
        res.status(500).send(err)
        console.log('error making new user')
      })
  }
}