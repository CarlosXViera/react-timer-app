var React = require('react');
var Clock = require('Clock');

var Countdown = () => {
  return(
    <div>
      <Clock totalSeconds={63}/>
    </div>
  );
};

module.exports = Countdown;
