const router = require('express').Router()
const User = require("../models/User")

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/user', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        res.redirect('/')})
})

module.exports = router