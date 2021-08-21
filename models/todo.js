const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  done: {
    type: Boolean,
    default: false
  },
  due_date: String
})

module.exports = new mongoose.model('Todo', schema)
