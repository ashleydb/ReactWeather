//Library for making REST calls
var Axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b18b5fe3ba4e5a4d6cbb701159ab138f&units=imperial';

module.exports = {
  getTemperature: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //console.log(requestUrl);

    //Use the library to perform a promise and return another promice
    return Axios.get(requestUrl).then(function(response) {
      //Successful call
      if (response.data.cod && response.data.message) {
        //Need to check the response actually has the data we want from this API
        //throw new Error(error.response.data.message);
        throw new Error('Problem getting temperature for that city.');
      } else {
        return response.data.main.temp;
      }
    }, function(error) {
      //Error with call
      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        //throw new Error(error.response.data.message);
        throw new Error('Problem getting weather for that city.');
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error(error.message);
      }
    })
  }
}
