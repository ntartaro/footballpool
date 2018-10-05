const router = require('express').Router()
const User = require("../models/User")
const Pick = require("../models/Pick")
const ThisWeeksGames = require("../models/ThisWeeksGames")

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
            })
        })
       res.render('leaderboard', { users }) 
    })
})

//LOGIN PAGE
router.get('/login', (req, res) => {
    res.render('login')
})

//SIGNUP PAGE
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

//UPDATE PAGE
router.get('/user/:username/picks/update', (req, res) => {
    var username = req.params.username
    ThisWeeksGames.find().then(games => {
        var thisWeeksGame = games[0]
        res.render('users/update', { username, thisWeeksGame } )
    })
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

//WEEKLY PICK PAGE
router.get('/thisweekspicks', (req, res) => {
    res.render('thisweekspicks')
})
//WEEKLY PICK UPDATE
router.post('/thisweekspicks', (req, res) => {
    ThisWeeksGames.create({
        gameOneFavorite: req.body.gameOneFavorite,
        gameOneUnderdog: req.body.gameOneUnderdog,
        gameOneSpread: req.body.gameOneSpread,
        gameTwoFavorite: req.body.gameTwoFavorite,
        gameTwoUnderdog: req.body.gameTwoUnderdog,
        gameTwoSpread: req.body.gameTwoSpread,
        gameThreeFavorite: req.body.gameThreeFavorite,
        gameThreeUnderdog: req.body.gameThreeUnderdog,
        gameThreeSpread: req.body.gameThreeSpread,
        gameFourFavorite: req.body.gameFourFavorite,
        gameFourUnderdog: req.body.gameFourUnderdog,
        gameFourSpread: req.body.gameFourSpread,
        gameFiveFavorite: req.body.gameFiveFavorite,
        gameFiveUnderdog: req.body.gameFiveUnderdog,
        gameFiveSpread: req.body.gameFiveSpread,
        gameSixFavorite: req.body.gameSixFavorite,
        gameSixUnderdog: req.body.gameSixUnderdog,
        gameSixSpread: req.body.gameSixSpread,
        gameSevenFavorite: req.body.gameSevenFavorite,
        gameSevenUnderdog: req.body.gameSevenUnderdog,
        gameSevenSpread: req.body.gameSevenSpread,
        gameEightFavorite: req.body.gameEightFavorite,
        gameEightUnderdog: req.body.gameEightUnderdog,
        gameEightSpread: req.body.gameEightSpread,
        gameNineFavorite: req.body.gameNineFavorite,
        gameNineUnderdog: req.body.gameNineUnderdog,
        gameNineSpread: req.body.gameNineSpread,
        gameTenFavorite: req.body.gameTenFavorite,
        gameTenUnderdog: req.body.gameTenUnderdog,
        gameTenSpread: req.body.gameTenSpread,
        gameElevenFavorite: req.body.gameElevenFavorite,
        gameElevenUnderdog: req.body.gameElevenUnderdog,
        gameElevenSpread: req.body.gameElevenSpread,
        gameTwelveFavorite: req.body.gameTwelveFavorite,
        gameTwelveUnderdog: req.body.gameTwelveUnderdog,
        gameTwelveSpread: req.body.gameTwelveSpread,
        gameThirteenFavorite: req.body.gameThirteenFavorite,
        gameThirteenUnderdog: req.body.gameThirteenUnderdog,
        gameThirteenSpread: req.body.gameThirteenSpread,
        gameFourteenFavorite: req.body.gameFourteenFavorite,
        gameFourteenUnderdog: req.body.gameFourteenUnderdog,
        gameFourteenSpread: req.body.gameFourteenSpread
    }).then(user => {
        res.redirect('/user/Nick')
    })
})

module.exports = router