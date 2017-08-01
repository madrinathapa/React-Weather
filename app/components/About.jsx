var React = require('react');

var About = function(props){
    return (
      <div>
       <h2 className="text-center  page-title">About</h2>
       <p>This is a simple web application, which shows the temperature of the city. </p>
       <p>This application was built using:</p>
       <ul>
         <li>React</li>
         <li>jQuery</li>
         <li>Foundation</li>
       </ul>
      </div>
    )
};

module.exports = About;
