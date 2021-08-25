const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  user_id: {
    select: false,
    type: mongoose.SchemaTypes.ObjectID, ref: 'User'
  },
  group_id: {
    type: mongoose.SchemaTypes.ObjectId, ref: 'Group'
  },
  done: {
    type: Boolean,
    default: false
  },
  due_date: String
})

module.exports = new mongoose.model('Todo', schema)
