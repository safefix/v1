import React from 'react';

const styleObj = {
  width: "320px",
  height: "630px"
};

class Calendar extends React.Component{
  render(){
    return(
  <div className="calendly-inline-widget" data-url="https://calendly.com/terena-blasberg/repair" style={styleObj}>
  </div>
  )
  }
}

export default Calendar;