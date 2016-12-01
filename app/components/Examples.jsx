var React = require('react');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// })

//Basic presentational component that would only have a render function
// rewritten using arror functions from ES6.
var Examples = (props) => {
  return (
    <h3>Examples Component</h3>
  );
}

module.exports = Examples;
