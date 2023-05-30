const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' })
      }
      req.user = user
      next()
    })
  } else {
    res.status(401).json({ error: 'No token provided' })
  }
}
