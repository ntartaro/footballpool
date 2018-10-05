const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./controllers/index.js')
const hbs = require('hbs')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
app.use(express.static(__dirname + "/public"))

hbs.registerHelper('picks', function(pickModel) {
    if (pickModel.flipper !== 1) { return }
    var teamOne = 'Ravens'
    if (pickModel.gameOneChoice == 1) {teamOne = 'Browns'} 
    var teamTwo = 'Packers'
    if (pickModel.gameTwoChoice == 1) {teamTwo = 'Lions'} 
    var teamThree = 'Jaguars'
    if (pickModel.gameThreeChoice == 1) {teamThree = 'Chiefs'} 
    var teamFour = 'Broncos'
    if (pickModel.gameFourChoice == 1) {teamFour = 'Jets'} 
    var teamFive = 'Falcons'
    if (pickModel.gameFiveChoice == 1) {teamFive = 'Steelers'} 
    var teamSix = 'Giants'
    if (pickModel.gameSixChoice == 1) {teamSix = 'Panthers'}
    var teamSeven = 'Titans'
    if (pickModel.gameSevenChoice == 1) {teamSeven = 'Bills'} 
    var teamEight = 'Dolphins'
    if (pickModel.gameEightChoice == 1) {teamEight = 'Bengals'} 
    var teamNine = 'Raiders'
    if (pickModel.gameNineChoice == 1) {teamNine = 'Chargers'} 
    var teamTen = 'Vikings'
    if (pickModel.gameTenChoice == 1) {teamTen = 'Eagles'} 
    var teamEleven = 'Cardinals'
    if (pickModel.gameElevenChoice == 1) {teamEleven = '49ers'} 
    var teamTwelve = 'Rams'
    if (pickModel.gameTwelveChoice == 1) {teamTwelve = 'Seahawks'} 
    var teamThirteen = 'Cowboys'
    if (pickModel.gameThirteenChoice == 1) {teamThirteen = 'Texans'} 
    var teamFourteen = 'Redskins'
    if (pickModel.gameFourteenChoice == 1) {teamFourteen = 'Saints'} 
    var tiebreaker = pickModel.tiebreaker

    if (pickModel.flipper == 1) {
    return `<ul>
    <p class="results">1PM Games:</p>
    <li>${teamOne}</li>
    <li>${teamTwo}</li>
    <li>${teamThree}</li>
    <li>${teamFour}</li>
    <li>${teamFive}</li>
    <li>${teamSix}</li>
    <li>${teamSeven}</li>
    <li>${teamEight}</li>
    <br>
    <p class="results">4pm Games:</p>
    <li>${teamNine}</li>
    <li>${teamTen}</li>
    <li>${teamEleven}</li>
    <li>${teamTwelve}</li>
    <br>
    <p class="results">Sunday Night Game:</p>
    <li>${teamThirteen}</li>
    <br>
    <p class="results">Monday Night Game:</p>
    <li>${teamFourteen}</li>
    <br>
    <p class="results">Monday Night Points: <li>${tiebreaker}</li></p>
    </ul>`
    }
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log('Up and running'))