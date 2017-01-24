var React = require('react');
import Nav from 'Nav'

var Main = (props) => {
  return (
    <div>
    <Nav/>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
