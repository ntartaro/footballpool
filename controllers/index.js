const router = require('express').Router()
const User = require("../models/User")
const Pick = require("../models/Pick")

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

router.post('/picks', (req, res) => {
    console.log(req.body)
    Pick.create({
        gameOneChoice: req.body.gameOneChoice,
        gameTwoChoice: req.body.gameTwoChoice,
        tiebreaker: req.body.tiebreaker
    }).then(user => {
        res.redirect('/')
    })
})

module.exports = router