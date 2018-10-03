const router = require('express').Router()
const User = require("../models/User")
const Pick = require("../models/Pick")

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/leaderboard', (req, res) => {
    Pick.find().then( pick => {
       res.render('leaderboard', { pick }) 
    })
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/user/:username/picks', (req, res) => {
    var username = req.params.username
    res.render('users/picks', { username } )
})

router.get('/user/:username', (req, res) => {
    User.find({ username : req.params.username }).then( user => {
        Pick.find({}).then(pick => {
            res.render('users/view', { pick, user})
        }) 
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

router.post('/user/:username/picks', (req, res) => {
    console.log(req.body)
    Pick.create({
        username: req.params.username,
        gameOneChoice: req.body.gameOneChoice,
        gameTwoChoice: req.body.gameTwoChoice,
        gameThreeChoice: req.body.gameThreeChoice,
        gameFourChoice: req.body.gameFourhoice,
        gameFiveChoice: req.body.gameFiveChoice,
        gameSixChoice: req.body.gameSixChoice,
        gameSevenChoice: req.body.gameSevenChoice,
        gameEightChoice: req.body.gameEightChoice,
        gameNineChoice: req.body.gameNineChoice,
        gameTenChoice: req.body.gameTenChoice,
        gameElevenChoice: req.body.gameElevenChoice,
        gameTwelveChoice: req.body.gameTwelveChoice,
        gameThirteenChoice: req.body.gameThirteenChoice,
        gameFourteenChoice: req.body.gameFourteenChoice,
        tiebreaker: req.body.tiebreaker,
        flipper: 1
    }).then(user => {
        res.redirect(`/user/${user.username}`)
    })
})

module.exports = router