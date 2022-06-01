const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/:email').get(function (req, res) {
  let myquery = { email: Object(req.params.email) }

  User.findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

router.route('/add').post((req, res) => {
  const name = req.body.name
  const position = req.body.position
  const email = req.body.email
  const phone = req.body.phone
  const address = req.body.address
  const id = req.body.id
  const specialization = req.body.specialization
  const password = req.body.password
  const rpassword = req.body.rpassword

  const newUser = new User({
    name,
    position,
    email,
    phone,
    address,
    id,
    specialization,
    password,
    rpassword,
  })
  newUser
    .save()
    .then(() => res.json('User added'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((User) => {
      User.name = req.body.name
      User.position = req.body.position
      User.email = req.body.email
      User.phone = req.body.phone
      User.address = req.body.address
      User.id = req.body.id
      User.specialization = req.body.specialization

      User.save()
        .then(() => res.json('User Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/login').post((req, res) => {
  User.findOne({ email: req.body.email }, function (err, result) {
    if (err) throw err
    if (result != null) {
      if (result.password === req.body.password) {
        res.json('granted')
      } else {
        res.json('denied')
      }
    } else {
      res.json('Not Found')
    }
  })
})

router.route('/:specalization').get(function (req, res) {
  let myquery = {
    specialization: Object(req.params.specalization),
  }

  User.find(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

//   const update = async (ctx) => {
//     let uin = ctx.request.body;
//     const index = data.findIndex((e) => e.id === uin.id);
//     let msg;
//     if (index === -1) {
//       msg = "no user";
//       data.push(uin);
//     } else {
//       data[index] = uin;
//       msg = "data updated";
//     }
//     ctx.body = { data: data, msg: msg };
//   };

//   router.put("/update/:id", update);

module.exports = router
