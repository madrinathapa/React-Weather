var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render:function(){
    return (
      <div>
        <h2 className="text-center page-title">Examples</h2>
        <p>Here's the list of few cities to try:</p>
        <ul>
          <li>
            <Link to='/?location=paris'>Paris</Link>
          </li>
          <li>
            <Link to='/?location=london'>London</Link>
          </li>
          <li>
            <Link to='/?location=chicago'>Chicago</Link>
          </li>
        </ul>
      </div>
    )
  }
})

module.exports = Examples;
