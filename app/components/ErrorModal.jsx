var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
    var {title, message} = this.props;
    var modalMarkUp = (
    <div id="error-modal" className="reveal small text-center" data-reveal="">
      <h5>{title}</h5>
      <p>{message}</p>
      <p>
        <button className="button " data-close="">Ok</button>
      </p>
    </div>
  );

    var $modal = $(ReactDOMServer.renderToString(modalMarkUp));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return(
      <div>

      </div>
    )
  }
});

module.exports = ErrorModal;
