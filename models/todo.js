const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  done: {
    type: Boolean,
    default: false
  }
})

module.exports = new mongoose.model('Todo', schema)
