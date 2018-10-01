const router = require('express').Router()
const User = require("../models/User")

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/leaderboard', (req, res) => {
    res.render('leaderboard/leaderboard')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/user/:username', (req, res) => {
    User.find({ username : req.params.username }).then( users => {
        res.render('users/view', { users })
    })
})

router.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(user => {
        res.redirect(`/user/${user.username}`)})
})

module.exports = router