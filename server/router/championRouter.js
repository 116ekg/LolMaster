const router = require('express').Router()
const controller = require('../controller/championController')

router.get('/fetchChampion', controller.fetchChampion)
router.post('/addChampionId', controller.createChampionId)
router.post('/addChampionName', controller.createChampionName)

module.exports = router