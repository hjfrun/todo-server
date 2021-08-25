module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const User = require('../models/user.js')

  return async (req, res, next) => {
    try {
      const token = String(req.headers.authorization || '').split(' ').pop()
      assert(token, 401, 'Please login first!')

      // extract token
      const { id } = jwt.verify(token, process.env.TOKEN_SECRET)
      assert(id, 401, 'Please login first!')

      req.user = await User.findById(id)
      assert(req.user, 401, 'Please login first')
      await next()
    } catch (err) {
      res.status(err.statusCode || 500).send({ message: err.message })
    }
  }
}
