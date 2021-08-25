const express = require('express')

const {
  fetchAllUsers,
  fetchUser,
  createUser
} = require('../controllers/user')

const router = express.Router()

router.get('/', fetchAllUsers)
router.get('/:id', fetchUser)
router.post('/', createUser)

module.exports = router
