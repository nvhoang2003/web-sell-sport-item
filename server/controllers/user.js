const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.signIn = async (req, res) => {
  const { username, password } = req.body

  User.findOne({
    where: {
      name: username,
    },
    include: {
      all: true,
      nested: true,
    },
  }).then((user) => {
    if (user && user.password == password) {
      // Tạo token
      const token = jwt.sign({ username }, 'RANDOM_TOKEN_SECRET', {
        expiresIn: '1h',
      })
      res.json({ token })
    } else {
      res.status(401).json({ error: 'Invalid credentials' })
    }
  })
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json({
      error: {
        status: 200,
        message: 'OK',
      },
      data: {
        users,
      },
    })
  } catch (err) {
    res.status(400).json({
      error: {
        status: 400,
        message: err.toString(),
      },
      data: {},
    })
  }
}

// exports.AddUser = (req, res, next) => {
//   User.create({
//     req.body
//   })
//     .then(user => {
//       return res.status(200).json({
//         error: {
//           status: 200,
//           message: 'Create Successfully!'
//         },
//         data: {
//           user: user,
//         }
//       });
//     })
//     .catch(err => {
//       return res.status(400).json({
//         error: {
//           status: 400,
//           message: err.toString()
//         },
//         data: {}
//       });
//     });
// };

exports.AddUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json({
      error: {
        status: 201,
        message: 'Created',
      },
      data: {
        user: newUser,
      },
    })
  } catch (err) {
    const errObj = {}
    console.log(err)
    err.errors.map((er) => {
      errObj[er.path] = er.message
    })
    res.status(400).json({
      error: {
        status: 400,
        message: err.toString(),
        validate: errObj,
      },
      data: {},
    })
  }
}
