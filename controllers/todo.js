const Todo = require('../models/todo')

const fetchAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({ user_id: req.user.id })
    res.status(200).json(allTodos)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

const fetchTodo = async (req, res) => {
  const id = req.params.id
  try {
    const todo = await Todo.findById(id)
    res.status(200).json(todo)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

const createTodo = async (req, res) => {
  const todo = req.body
  const { id: user_id } = req.user
  todo.user_id = user_id
  const newTodo = new Todo(todo)
  try {
    await newTodo.save()
    res.status(201).json(newTodo)
  } catch (err) {
    res.status(409).json({ msg: err.message })
  }
}

const deleteTodo = async (req, res) => {
  const id = req.params.id
  try {
    const todo = await Todo.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Delete successfully!', todo })
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

const updateTodo = async (req, res) => {
  const id = req.params.id
  const updates = req.body
  try {
    const newTodo = await Todo.findByIdAndUpdate(id, updates, { new: true })
    res.status(200).json({ msg: 'Todo Updated Successfully!', newTodo })
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

module.exports = { fetchAllTodos, fetchTodo, createTodo, deleteTodo, updateTodo }
