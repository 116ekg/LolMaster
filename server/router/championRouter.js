const router = require('express').Router()
const controller = require('../controller/championController')

router.get('/fetchChampion', controller.fetchChampion)
router.post('/addChampion', controller.createChampion)

module.exports = router