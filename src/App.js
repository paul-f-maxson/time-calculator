import React, { Component } from 'react';

import Input from "./Input.js";
import Output from "./Output.js";

class TimeCalculator extends Component{
  constructor(props) {
    super(props);

    // Create initial start and end Dates
    const initStartDate = new Date();
    const initEndDate = new Date();
    initStartDate.setSeconds(0);
    initEndDate.setSeconds(0);
    initStartDate.setMilliseconds(0);
    initEndDate.setMilliseconds(0);

    this.state = {
      startDate: initStartDate,
      endDate: initEndDate,
    };

    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
  }

  handleChangeStartDate(date) {
    this.setState({
      startDate: date,
    });
  }

  handleChangeEndDate(date) {
    this.setState({
      endDate: date,
    });
  }

  render() {

    return (
      <div className="timeCalculator">
        <Input
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChangeStart={this.handleChangeStartDate}
          onChangeEnd={this.handleChangeEndDate}
        />
        <Output
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </div>
    );

  }
}

export default TimeCalculator
