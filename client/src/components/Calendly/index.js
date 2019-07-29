import React, {Component} from 'react';

const styleObj = {
    width: "320px",
    height: "630px"
}

class Calendly extends Component {
render() {
return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/huntsimon23" style={styleObj}>
    </div> 
    );
};
};

export default Calendly;