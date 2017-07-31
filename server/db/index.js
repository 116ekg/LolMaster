const Sequelize = require('sequelize')
const db = require('./config')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  summonerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

const Champion = db.define('champion', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  champId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  icon: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.sync()
Champion.sync({ force: true })
  .then(function() {
    console.log('Champion table created...')
    return Champion.bulkCreate([
      {name: 'Aatrox', champId: 266, icon: '../../static/LOLicons/AatroxSquare.png'},
      {name: 'Ahri', champId: 103, icon: '../../static/LOLicons/AhriSquare.png'},
      {name: 'Akali', champId: 84, icon: '../../static/LOLicons/AkaliSquare.png'},
      {name: 'Alistar', champId: 12, icon: '../../static/LOLicons/AlistarSquare.png'},
      {name: 'Amumu', champId: 32, icon: '../../static/LOLicons/AmumuSquare.png'},
      {name: 'Anivia', champId: 34, icon: '../../static/LOLicons/AniviaSquare.png'},
      {name: 'Annie', champId: 1, icon: '../../static/LOLicons/AnnieSquare.png'},
      {name: 'Ashe', champId: 22, icon: '../../static/LOLicons/AsheSquare.png'},
      {name: 'Aurelion Sol', champId: 136, icon: '../../static/LOLicons/Aurelion_SolSquare.png'},
      {name: 'Azir', champId: 268, icon: '../../static/LOLicons/AzirSquare.png'},
      {name: 'Bard', champId: 432, icon: '../../static/LOLicons/BardSquare.png'},
      {name: 'Blitzcrank', champId: 53, icon: '../../static/LOLicons/BlitzcrankSquare.png'},
      {name: 'Brand', champId: 63, icon: '../../static/LOLicons/BrandSquare.png'},
      {name: 'Braum', champId: 201, icon: '../../static/LOLicons/BraumSquare.png'},
      {name: 'Caitlyn', champId: 51, icon: '../../static/LOLicons/CaitlynSquare.png'},
      {name: 'Camille', champId: 164, icon: '../../static/LOLicons/CamilleSquare.png'},
      {name: 'Cassiopeia', champId: 69, icon: '../../static/LOLicons/CassiopeiaSquare.png'},
      {name: 'Jinx', champId: 222, icon: '../../static/LOLicons/JinxSquare.png'},
      {name: 'Miss Fortune', champId: 21, icon: '../../static/LOLicons/Miss_FortuneSquare.png'},
      {name: 'Janna', champId: 40, icon: '../../static/LOLicons/JannaSquare.png'},
      {name: 'Sivir', champId: 15, icon: '../../static/LOLicons/SivirSquare.png'},
      
    ])
  })
  .then(function() {
    console.log('seeded champion table....')
  })

module.exports = {
  User,
  Champion
}