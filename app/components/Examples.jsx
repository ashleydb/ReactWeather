var React = require('react');
var {Link} = require('react-router');

//Basic presentational component that would only have a render function
// rewritten using arror functions from ES6.
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to='/?location=London,UK'>London, UK</Link></li>
        <li><Link to='/?location=San%20Francisco'>San Francisco</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;
