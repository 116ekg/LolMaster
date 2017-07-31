const router = require('express').Router()

router.use('/user', require('./userRouter'))
router.use('/champion', require('./championRouter'))

module.exports = router