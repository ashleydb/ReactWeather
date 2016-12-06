var React = require('react');

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
    //Use jQuery to get the modal element, then show it with foundation
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var {title, message} = this.props;
    return (
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
  }
});

module.exports = ErrorModal;
