var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading:false
    };
  },
  handleSearch: function(location){
    var obj = this;

    this.setState({
      isLoading:true
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
        obj.setState({
          location: location,
          temp:temp,
          isLoading:false
        });
      },function (errorMessage){
        obj.setState({
          isLoading:false
        });

        alert(errorMessage);
      })
  },
  render:function(){
    var {isLoading, temp,location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h2>Weather component goes here</h2>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    )
  }
})

module.exports =Weather;
