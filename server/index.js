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

app.post('/pingUsername', function(req, res) {
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


app.listen(PORT, function() {
  console.log('now serving on port ', PORT)
})