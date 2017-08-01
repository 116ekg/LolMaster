const router = require('express').Router()
const controller = require('../controller/staticController.js')

router.post('/findStaticData', controller.findStaticData)

module.exports = router