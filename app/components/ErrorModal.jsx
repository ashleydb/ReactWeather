var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

//Component with some logic, since we handle searches in the Nav bar.
//Uses foundation for styling the elements.
var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Uh-oh'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    //Instead of using render() for this, we move here since Foundation would otherwise
    // modify the DOM, which React should be in charge of.
    var {title, message} = this.props;
    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="expanded hollow button" data-close="">
            OK
          </button>
        </p>
      </div>
    );

    //Create a jQuery object we want to add to the DOM, which is the above React element
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    //Find this component in the DOM, then add in some markup to display
    $(ReactDOM.findDOMNode(this)).html($modal);

    //Use jQuery to get the modal element, then show it with foundation
    var modal = new Foundation.Reveal($('#error-modal'));
    //This actually modifys the DOM, which is why we had to modify as above
    modal.open();
  },
  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
