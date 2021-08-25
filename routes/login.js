const express = require('express')
const assert = require('http-assert')

const router = express.Router()

const User = require('../models/user')

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body

    // find user by username
    const user = await User.findOne({ username }).select('+password')
    assert(user, 422, 'User Not Exist!')

    // validate the password
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, 'Please enter the correct password!')

    const token = require('jsonwebtoken').sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '10800s' })
    res.send({ token })
  } catch (err) {
    res.status(err.statusCode || 500).send({ msg: err.message })
  }
})

module.exports = router
