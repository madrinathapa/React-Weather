var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return{
      title:'Error'
    };
  },
  propTypes:{
    title:React.PropTypes.string,
    message:React.PropTypes.string.isrequired
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal small text-center" data-reveal="">
        <h5>{title}</h5>
        <p>{message}</p>
        <p>
          <button className="button " data-close="">Ok</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
