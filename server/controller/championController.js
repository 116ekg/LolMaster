const db = require('../db')
const Sequelize = require('sequelize')

module.exports = {
  fetchChampion: (req, res) => {
    db.Champion.findAll({})
      .then(result => {
        console.log('successfully fetched all champs')
        res.status(200).send(result)
      })
      .catch(err => {
        res.status(500).send(err)
        console.log('error fetching all champs')
      })
  },
  createChampion: (req, res) => {
    db.Champion.findOrCreate({
      where: {
        champId: req.body.champId
      }
    })
      .spread((newChamp, created) => {
        console.log('found existing or made new champ')
        if (created) {
          res.status(200).send(newChamp)
        } else {
          res.status(200).send(newChamp)
        }
      })
      .catch(err => {
        res.status(500).send(err)
        console.log('error making new champ')
      })
  }
}