const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/ca51bbe4a2891d4eb1524ffadbc1f1e4/' + latitude + ',' + longitude + '?units=si';

  request({ url, json: true }, (error, { body }) => {
    if(error) {
      callback('Unable to connect to forecast servers.', undefined)
    } else if(body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of raid.`);
    }
  });
}

module.exports = forecast;