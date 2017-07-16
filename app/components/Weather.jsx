var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      location:'Miami',
      temp:89
    };
  },
  handleSearch: function(location){
    var obj = this;

    OpenWeatherMap.getTemp(location).then(function(temp){
        obj.setState({
          location: location,
          temp:temp
        });
      },function (errorMessage){
        alert(errorMessage);
      })
  },
  render:function(){
    var {temp,location} = this.state;

    return (
      <div>
        <h2>Weather component goes here</h2>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
})

module.exports =Weather;
