require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./routes')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api/todo', router)

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  app.listen(port, () => console.log(`Database Connected and Server running on http://localhost:${port}`))
}).catch(e => console.log(e))
