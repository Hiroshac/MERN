const express = require('express')
const router = express.Router()
const multer = require('multer')
const EV3File = require('../models/ev3.model')

const storage =multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'supload')
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname)
    },
})

const supload = multer({ storage: storage})

//GET ALL DATA
router.get('/get', (req, res) => {
    EV3File.find()
        .then((file) => {
            res.json(file)
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

//ADD NEW DATA
router.post('/add', supload.single('ev3doc'), (req, res) => {
    const newfile = new EV3File({
        ev3doc : req.body.originalname,
    });

    newfile 
        .save()
        .then(() => res.json('new student file posted'))
        .catch((err) => res.status(400).json(`Error : ${err}`))
});

module.exports = router  