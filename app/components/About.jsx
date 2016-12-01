var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// })

//Basic presentational component that would only have a render function
// rewritten using arror functions from ES6.
var About = (props) => {
  return (
    <h3>About Component</h3>
  );
}

module.exports = About;
