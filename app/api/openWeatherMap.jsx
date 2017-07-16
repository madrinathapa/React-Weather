var Axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=ba5ec8f1aa2e1caf18fcfe460f167a3a';

module.exports= {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return Axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.cod);
      }else{
        return res.data.main.temp;
      }

    }, function(res){
      throw new Error(res.response.data.message);
    });
  }
}
