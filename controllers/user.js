const User = require('../models/user')

const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

const fetchUser = async (req, res) => {
  try {
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

const createUser = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    res.status(409).json({ msg: err.message })
  }
}

module.exports = {
  fetchAllUsers,
  fetchUser,
  createUser
}
