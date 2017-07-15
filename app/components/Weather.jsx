var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render:function(){
    return (
      <div>
        <h2>Weather component goes here</h2>
        <WeatherForm></WeatherForm>
        <WeatherMessage/>
      </div>
    )
  }
})

module.exports =Weather;
