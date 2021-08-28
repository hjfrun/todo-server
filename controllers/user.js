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
  const id = req.params.id
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
    res.status(201).json({ msg: 'User Created Successfully!', status: 'success', user })
  } catch (err) {
    res.status(409).json({ msg: err.message })
  }
}

// update user info, i.e: update their username or password
const updateUser = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })
    user.password = password
    await user.save()
    res.status(202).json({ msg: 'Password Updated Successfully!', status: 'success' })
  } catch (err) {
    res.status(402).json({ msg: err.message })
  }
}

module.exports = {
  fetchAllUsers,
  fetchUser,
  createUser,
  updateUser
}
