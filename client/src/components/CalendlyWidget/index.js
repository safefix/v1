import React, {Component} from 'react';


class CustomButton extends Component {
    render () {
        const { onPress, children } = this.props;

        return (
            <button type="button" onClick={onPress}>
              {children}
            </button>
        );
    }
  }

class CalendlyWidget extends Component {
    handleEvent = (event) => {
        window.Calendly.initPopupWidget({
            url: 'https://calendly.com/kstokes16'
        })
        event.preventDefault();
    };

    render () {
        return (
        <div>
            <CustomButton onPress={this.handleEvent}>
            Schedule A Calendly Meeting
            </CustomButton>
        </div>
        );
    }
}

export default CalendlyWidget;


//<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/kstokes16'});return false;">Schedule time with me</a>

