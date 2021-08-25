require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const todoRouter = require('./routes/todo')
const loginRouter = require('./routes/login')
const userRouter = require('./routes/user')
const groupRouter = require('./routes/group')
const auth = require('./middlewares/auth')


// middlewares
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api/todo', auth(), todoRouter)
app.use('/api/group', auth(), groupRouter)
app.use('/api/login', loginRouter)
app.use('/api/user', userRouter)

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  app.listen(port, () => console.log(`Database Connected and Server running on http://localhost:${port}`))
}).catch(e => console.log(e))
