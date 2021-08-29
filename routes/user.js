const express = require('express')

const {
  fetchAllUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user')

const router = express.Router()

router.get('/', fetchAllUsers)
router.get('/:id', fetchUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router
