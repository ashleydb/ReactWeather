var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {location, temperature} = this.props;
//     return (
//       <h3>The temperature in {location} is {temperature}F</h3>
//     );
//   }
// })

//Basic presentational component that would only have a render function
// rewritten using arror functions from ES6. Also destructures the props inline.
var WeatherMessage = ({location, temperature}) => {
  return (
    <h3>The temperature in {location} is {temperature}F</h3>
  );
}

module.exports = WeatherMessage;
