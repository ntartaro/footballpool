const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./controllers/index.js')
const hbs = require('hbs')

hbs.registerHelper('picks', function(pickModel) {
    var teamOne = 'Broncos'
    if (pickModel.gameOneChoice == 1) {teamOne = 'Jets'} 
    var teamTwo = 'Packers'
    if (pickModel.gameTwoChoice == 1) {teamTwo = 'Lions'} 
    var teamThree = 'Giants'
    if (pickModel.gameThreeChoice == 1) {teamThree = 'Panthers'} 
    var teamFour = 'Titans'
    if (pickModel.gameFourChoice == 1) {teamFour = 'Bills'} 
    var teamFive = 'Falcons'
    if (pickModel.gameFiveChoice == 1) {teamFive = 'Steelers'} 
    var teamSix = 'Ravens'
    if (pickModel.gameSixChoice == 1) {teamSix = 'Browns'}
    var teamSeven = 'Dolphins'
    if (pickModel.gameSevenChoice == 1) {teamSeven = 'Bengals'} 
    var teamEight = 'Jaguars'
    if (pickModel.gameSevenChoice == 1) {teamSeven = 'Chiefs'} 
    var teamNine = 'Raiders'
    if (pickModel.gameNineChoice == 1) {teamNine = 'Chargers'} 
    var teamTen = 'Vikings'
    if (pickModel.gameTenChoice == 1) {teamTen = 'Eagles'} 
    var teamEleven = 'Rams'
    if (pickModel.gameElevenChoice == 1) {teamEleven = 'Seahawks'} 
    var teamTwelve = 'Cardinals'
    if (pickModel.gameTwelveChoice == 1) {teamTwelve = '49ers'} 
    var teamThirteen = 'Cowboys'
    if (pickModel.gameThirteenChoice == 1) {teamThirteen = 'Texans'} 
    var teamFourteen = 'Redskins'
    if (pickModel.gameFourteenChoice == 1) {teamFourteen = 'Saints'} 
    var tiebreaker = pickModel.tiebreaker
    console.log(pickModel)
    if (pickModel.flipper == 1) {
        console.log('flipper 1')
    return `<ul>
    <li>${teamOne}</li>
    <li>${teamTwo}</li>
    <li>${teamThree}</li>
    <li>${teamFour}</li>
    <li>${teamFive}</li>
    <li>${teamSix}</li>
    <li>${teamSeven}</li>
    <li>${teamEight}</li>
    <li>${teamNine}</li>
    <li>${teamTen}</li>
    <li>${teamEleven}</li>
    <li>${teamTwelve}</li>
    <li>${teamThirteen}</li>
    <li>${teamFourteen}</li>
    <li>Monday Night Points: ${tiebreaker}</li>
    </ul>`
    }
})

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
app.use(router)
app.use(express.static(__dirname + "/public"))

app.listen(3000, () => console.log('Up and running'))