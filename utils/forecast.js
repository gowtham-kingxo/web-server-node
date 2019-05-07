const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/baa1fab91b9163c363d85b3234334f50/'+latitude+','+longitude+'?units=si';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const weatherForecast = body.daily.data[0].summary + " The current temperature is "+body.currently.temperature
            + " and the chance of rain is "+body.currently.precipProbability + "%";

            callback(undefined, weatherForecast)
        }
    })
}

module.exports = forecast;