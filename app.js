const express = require('express');
const app = express();
const port = process.env.PORT || 4040;
const cors = require('cors');
const rp = require('request-promise');
const keepServerAwake = require('./keepServerAwake.js');
require('dotenv').config();

const nerdAPI = process.env.NERD_API_KEY;

// keepServerAwake();

app.use(cors()) // allows cross origin sharing

// / weekly projections by position
app.get('/nerdprojections/:pos/:wk', function(req, res) {
  rp({
  uri: `https://www.fantasyfootballnerd.com/service/weekly-projections/json/${nerdAPI}/${req.params.pos}/${req.params.wk}`,
  json: true
})
  .then((data) => {
    res.json(data)
  })
})

// weekly rankings by position
app.get('/nerdrankings/:pos/:wk', function(req, res) {
  rp({
  uri: `https://www.fantasyfootballnerd.com/service/weekly-rankings/json/${nerdAPI}/${req.params.pos}/${req.params.wk}/1/`,
  json: true
})
  .then((data) => {
    res.json(data)
  })
})

// nfl weekly stats
app.get('/weekstats/:wk', function(req, res) {
  rp({
  uri: `http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&week=${req.params.wk}&format=json`,
  json: true
})
  .then((data) => {
    res.json(data)
  })
})

// espn expert rankings
app.get('/espnexperts/:wk/:pos/:exp', function(req, res) {
  rp({
  uri: `http://api.fantasy.nfl.com/v1/players/editorweekranks?season=2016&week=${req.params.wk}&position=${req.params.pos}&format=json&editorId=${req.params.exp}&count=100`,
  json: true
})
  .then((data) => {
    res.json(data)
  })
})

// espn player news
app.get('/playernews', function(req, res) {
  rp({
  uri: `http://api.fantasy.nfl.com/v1/players/news?format=json&count=200`,
  json: true
})
  .then((data) => {
    res.json(data)
  })
})

app.get('/', function(req, res){
  res.send('Juxta-position proxy server');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  console.log(`still listening...`)
});

// app.use((req, res, next) => {
//   req.setHeader({'Access-Control-Allow-Origin': '*}');
//   next();
// });
