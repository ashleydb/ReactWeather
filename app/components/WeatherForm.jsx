var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(event) {
    //Don't refresh the whole page when the form button is clicked
    event.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Enter City Name" ref="location"/>
          <button className="hollow expanded button">Get Weather</button>
        </form>
      </div>
    );
  }
})

module.exports = WeatherForm;
