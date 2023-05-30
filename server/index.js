const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoutes = require('./routes/user')
const loginRouter = require('./routes/login')

app.use(userRoutes)
app.use(loginRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
