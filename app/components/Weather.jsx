var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading:false
    };
  },
  handleSearch: function(location){
    var obj = this;

    this.setState({
      isLoading:true,
      errorMessage:undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
        obj.setState({
          location: location,
          temp:temp,
          isLoading:false
        });
      },function (e){
        obj.setState({
          isLoading:false,
          errorMessage:e.message
        });
        //alert(e.message);
      })
  },
  render:function(){
    var {isLoading, temp,location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError(){
        if(typeof errorMessage === 'string'){
          return(
            <ErrorModal message={errorMessage}/>
          )
        }
    }

    return (
      <div>
        <h2 className="text-center page-title">Search Weather</h2>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports =Weather;
