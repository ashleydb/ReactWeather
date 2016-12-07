var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
      isLoading: true,
      errorMessage: undefined
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
      that.setState({
        location: undefined,
        temperature: undefined,
        isLoading: false,
        errorMessage: error.message
      });
    });
  },
  render: function() {
    var {location, temperature, isLoading, errorMessage} = this.state;

    //Nested functions for conditional rendering
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather data...</h3>;
      } else if (temperature && location) {
        return <WeatherMessage location={location} temperature={temperature}/>;
      } else {
        return <h3 className="text-center">Try searching for a city</h3>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = Weather;
