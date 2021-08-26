const Group = require('../models/group')

const fetchAllGroups = async (req, res) => {
  try {
    const allGroups = await Group.find({ user_id: req.user.id })
    res.status(200).json(allGroups)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

// create a group
const createGroup = async (req, res) => {
  const group = req.body
  const { id: user_id } = req.user
  group.user_id = user_id
  const newGroup = new Group(group)
  try {
    await newGroup.save()
    res.status(201).json(newGroup)
  } catch (err) {
    res.status(409).json({ msg: err.message })
  }
}

// delete a group
const deleteGroup = async (req, res) => {
  const id = req.params.id
  try {
    const group = await Group.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Delete successfully!', group })
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

// update a group
const updateGroup = async (req, res) => {
  const id = req.params.id
  const updates = req.body
  try {
    const newGroup = await Group.findByIdAndUpdate(id, updates, { new: true })
    res.status(200).json({ msg: 'Group Updated Successfully!', newGroup })
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

// rename group function
// const renameGroup = async (req, res) => {

// }

module.exports = {
  fetchAllGroups,
  createGroup,
  deleteGroup,
  updateGroup
}
