const router = require('express').Router()
const User = require("../models/User")

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/leaderboard', (req, res) => {
    res.render('leaderboard')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/user/:username/picks', (req, res) => {
    res.render('users/picks')
})

router.get('/user/:username', (req, res) => {
    User.find({ username : req.params.username }).then( users => {
        res.render('users/view', { users })
    })
})

router.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        team: req.body.team
    }).then(user => {
        res.redirect(`/user/${user.username}`)})
})

module.exports = router