const express = require('express')

const {
  fetchAllGroups,
  createGroup,
  deleteGroup
} = require('../controllers/group')

const router = express.Router()

router.get('/', fetchAllGroups)
router.post('/', createGroup)
router.delete('/:id', deleteGroup)

module.exports = router
