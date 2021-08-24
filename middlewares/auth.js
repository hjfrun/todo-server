module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')

  return async (req, res, next) => {
    try {
      const token = String(req.headers.authorization || '').split(' ').pop()
      assert(token, 401, 'Please login first!')

      // extract token
      const { id: username } = jwt.verify(token, process.env.TOKEN_SECRET)
      assert(username === process.env.USERNAME, 401, 'Invalid user!')
      await next()
    } catch (err) {
      res.status(err.statusCode || 500).send({ message: err.message })
    }
  }
}
