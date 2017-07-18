var React = require('react');

var WeatherMessage = ({temp, location} )=>{
  return(<h3>The temprarture in {location} is {temp}.</h3>)

};
module.exports = WeatherMessage;
