import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
  render(){
    return(
      <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer Application</li>
          <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
          <li><Link to="/Countdown" activeClassName="active">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
        <li className="menu-text">Created by <a href="http://www.github.com/carlosxviera" target="blank">Carlos X Viera</a></li>
        </ul>
      </div>
      </div>
    );
  }
};
