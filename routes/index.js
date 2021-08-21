const express = require('express')

const { fetchAllTodos, createTodo, fetchTodo, deleteTodo, updateTodo } = require('../controllers/todo.js')

const router = express.Router()

router.get('/', fetchAllTodos)
router.get('/:id', fetchTodo)
router.post('/', createTodo)
router.delete('/:id', deleteTodo)
router.patch('/:id', updateTodo)

module.exports = router
