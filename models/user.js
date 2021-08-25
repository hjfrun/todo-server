const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
})

module.exports = new mongoose.model('User', schema)
