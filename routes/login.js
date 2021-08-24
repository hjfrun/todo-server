const express = require('express')
const assert = require('http-assert')

const router = express.Router()

const admin_password_hash = require('bcrypt').hashSync(process.env.PASSWORD || 'hjfrun', 10)

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body
    assert(username === process.env.USERNAME, 422, 'Please enter the correct username!')

    const isValid = require('bcrypt').compareSync(password, admin_password_hash)
    assert(isValid, 422, 'Please enter the correct password!')

    const token = require('jsonwebtoken').sign({ id: username }, process.env.TOKEN_SECRET, { expiresIn: '10800s' })
    res.send({ token })
  } catch (err) {
    res.status(err.statusCode || 500).send({ msg: err.message })
  }
})

module.exports = router
