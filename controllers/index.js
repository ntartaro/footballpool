const router = require('express').Router()
const User = require("../models/User")
const Pick = require("../models/Pick")
const ThisWeeksGames = require("../models/ThisWeeksGames")

const gameOneResult = 0
const gameTwoResult = 1

//INDEX
router.get('/', (req, res) => {
    res.render('index')
})

//LEADERBOARD
router.get('/leaderboard', (req, res) => {
    User.find().then( users => {
        users.forEach(function(user) {
            Pick.find({username: user.username}).then(pick => {
                var thisWeeksPicks = pick[0]
                var totalpointsthisweek = 0
                if (thisWeeksPicks && thisWeeksPicks.gameOneChoice == gameOneResult) {
                    totalpointsthisweek++
                }
                console.log(totalpointsthisweek)
                
            })
        })
       res.render('leaderboard', { users }) 
    })
})

//LOGIN FORM
router.get('/login', (req, res) => {
    res.render('login')
})

//SIGNUP FORM
router.get('/signup', (req, res) => {
    res.render('signup')
})
//SIGNUP CREATED
router.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        team: req.body.team
    }).then(user => {
        res.redirect(`/user/${user.username}`)})
})

//PICKS FORM
router.get('/user/:username/picks', (req, res) => {
    var username = req.params.username
    ThisWeeksGames.find().then(games => {
        var thisWeeksGame = games[0]
        res.render('users/picks', { username, thisWeeksGame } )
    })
})
//PICKS CREATED
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

//USER PAGE
router.get('/user/:username', (req, res) => {
    User.find({ username : req.params.username }).then(user => {
        Pick.find({username: req.params.username}).then(pick => {
            ThisWeeksGames.find().then(games => {
                var isadmin = (req.params.username == "Nick")
                var thisWeeksGame = games[0]
                res.render('users/view', { pick, user, isadmin, thisWeeksGame})
            })
        }) 
    })
})

//DELETE BUTTON
router.delete('/user/:username', (req, res) => {
    Pick.findOneAndRemove({ username: req.params.username }).then(user => {
        res.redirect(`/user/${user.username}`)
    })
})

//UPDATE 
router.get('/user/:username/picks/update', (req, res) => {
    console.log('GET THE UPDATE')
    var username = req.params.username
    res.render('users/update', { username } )
})


//UPDATE BUTTON
router.post('/user/:username/picks/update', (req, res) => {
    var username = req.params.username
    Pick.findOneAndUpdate({ username: req.params.username }, {
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
        res.redirect(`/user/${username}`)
    })
})

router.get('/supersecretadminpage', (req, res) => {
    res.render('thisweekspicks')
})

router.post('/supersecretadminpage', (req, res) => {
    ThisWeeksGames.create({
        gameOneFavorite: req.body.gameOneFavorite
    }).then(user => {
        res.redirect(`/user/Nick`)
    })
})

module.exports = router