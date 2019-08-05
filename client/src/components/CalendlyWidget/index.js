import React, {Component} from 'react';
import "./style.css";


class CustomButton extends Component {
    render () {
        const { onPress, children } = this.props;

        return (
            <button type="button" id="schedule-calendly" onClick={onPress}>
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
            <ion-icon name="calendar" id="calendar-button-icon"></ion-icon>
            Schedule your repair
            </CustomButton>
        </div>
        );
    }
}

export default CalendlyWidget;

