const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  user_id: {
    type: mongoose.SchemaTypes.ObjectID, ref: 'User'
  },
  done: {
    type: Boolean,
    default: false
  },
  due_date: String
})

module.exports = new mongoose.model('Todo', schema)
