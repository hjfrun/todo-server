const express = require('express')

const {
  fetchAllUsers,
  fetchUser,
  createUser,
  updateUser
} = require('../controllers/user')

const router = express.Router()

router.get('/', fetchAllUsers)
router.get('/:id', fetchUser)
router.post('/', createUser)
router.patch('/', updateUser)

module.exports = router
