const express = require('express')

const {
  fetchAllGroups,
  createGroup,
  deleteGroup,
  updateGroup
} = require('../controllers/group')

const router = express.Router()

router.get('/', fetchAllGroups)
router.post('/', createGroup)
router.delete('/:id', deleteGroup)
router.patch('/:id', updateGroup)

module.exports = router
