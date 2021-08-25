const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  user_id: {
    type: mongoose.SchemaTypes.ObjectId, ref: 'User'
  }
})

module.exports = new mongoose.model('Group', schema)
