var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

//Container component which will maintain state and fetch data from the web
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    this.setState({
      isLoading: true
    });
    //debugger; //Example of a breakpoint. Also works with our source map
    var that = this;
    openWeatherMap.getTemperature(location).then(function(temperature) {
      that.setState({
        location: location,
        temperature: temperature,
        isLoading: false
      });
    }, function(error) {
      alert(error);
      that.setState({
        location: undefined,
        temperature: undefined,
        isLoading: false
      });
    });
  },
  render: function() {
    var {location, temperature, isLoading} = this.state;

    //Nested function for conditional rendering
    function renderMessage() {
      if (isLoading) {
        return <h3>Featching weather data...</h3>;
      } else if (temperature && location) {
        return <WeatherMessage location={location} temperature={temperature}/>;
      } else {
        return <h3>Try searching for a city</h3>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather;
