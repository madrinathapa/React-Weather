var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      location:'Miami',
      temp:89
    };
  },
  handleSearch: function(location){
    this.setState({
      location: location,
      temp:23
    });

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
