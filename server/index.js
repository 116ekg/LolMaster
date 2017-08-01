const express = require('express')
const path = require('path')
const parser = require('body-parser')
const db = require('./db')
const router = require('./router')
const API_KEY = require('../apikey')
const axios = require('axios')

const app = express()
const PORT = 3000

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../static')))

app.use('/api', router)


// Riot API routes

app.post('/getMastery', function(req, res) {
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.body.username}?api_key=${API_KEY}`)
    .then(result => {
      axios.get(`https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${result.data.id}?api_key=${API_KEY}`)
        .then(newResult => {
          res.send(newResult.data)
        })
        .catch(err => {
          console.log('error getting champ mastery from riot')
        })
    })
    .catch(err => {
      console.log('error getting user data from riot')
    })
})

app.post('/getHistory', function(req, res) {
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.body.username}?api_key=${API_KEY}`)
  .then(response => {
    axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${response.data.accountId}/recent?api_key=${API_KEY}`)
      .then(result => {
        res.send(result.data)
      })
      .catch(err => {
        console.log('error getting match history from riot')
      })
  })
})

// app.post('getLiveMatch', function(req, res) {
//   axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.body.username}?api_key=${API_KEY}`)
//     .then(response => {
//       console.log(response.data)
//       axios.get(`https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${response.data.id}?api_key=${API_KEY}`)
//         .then(result => {
//           res.send(result.data)
//         })
//         .catch(err => {
//           console.log('error getting live match data from riot - possibly not in game')
//         })
//     })
// })

app.get('/*', function(req, res) {
  res.redirect('/')
})


app.listen(PORT, function() {
  console.log('now serving on port ', PORT)
})