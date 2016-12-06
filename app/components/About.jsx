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
    <div>
      <h1 className="text-center">About</h1>
      <p>An example project using React for the web. Some resources:</p>
      <ol>
        <li><a href='https://www.udemy.com/the-complete-react-web-app-developer-course/'>The Complete React Web App Developer Course</a> - Course taken to learn React</li>
        <li><a href='https://facebook.github.io/react/'>React</a> - Frontend JavaScript framework</li>
        <li><a href='http://foundation.zurb.com/sites/docs/'>Foundation</a> - Styling framework for the site</li>
        <li><a href='http://hidden-reaches-24461.herokuapp.com/'>Heroku</a> - This project is running on Heroku</li>
        <li><a href='https://github.com/ashleydb/ReactWeather'>GitHub Repo</a> - Sharing the code</li>
        <li><a href='http://www.openweathermap.org/'>OpenWeatherMap</a> - API used to get the weather data</li>
        <li>Also using Node, NPM, Webpack and more.</li>
      </ol>
    </div>
  );
}

module.exports = About;
