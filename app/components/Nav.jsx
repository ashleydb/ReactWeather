var React = require('react');
var {Link, IndexLink} = require('react-router');

//Component with some logic, since we handle searches in the Nav bar.
//Uses foundation for styling the elements.
var Nav = React.createClass({
  onFormSubmit: function(event) {
    //Don't refresh the whole page when the form button is clicked
    event.preventDefault();
    alert(this.refs.location.value);
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onFormSubmit}>
            <ul className="menu">
              <li><input type="search" placeholder="Enter City Name" ref="location"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
