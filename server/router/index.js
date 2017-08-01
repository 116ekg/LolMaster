const router = require('express').Router()

router.use('/user', require('./userRouter'))
router.use('/champion', require('./championRouter'))
router.use('/static', require('./staticRouter'))

module.exports = router