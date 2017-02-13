const unirest = require('unirest')

/*
  Get a new API key at https://market.mashape.com/vivekn/sentiment-3
*/

var sentiment = {}

sentiment.init = function () {
  return unirest.post('https://community-sentiment.p.mashape.com/text/')
  .header('X-Mashape-Key', "mWWQq3FEvFmshAJtzCRtenOsiOx8p1jM1qnjsn6ipImPMp8Zgr")
  .header('Content-Type', 'application/x-www-form-urlencoded')
  .header('Accept', 'application/json')
}

module.exports = sentiment
