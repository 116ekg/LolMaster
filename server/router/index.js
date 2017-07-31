const router = require('express').Router()
const controller = require('../controller/userController')

router.get('/fetchUsers', controller.fetchUser)
router.post('/addUser', controller.createUser)

module.exports = router