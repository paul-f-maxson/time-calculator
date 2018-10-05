import React, { Component } from 'react';
import moment from 'moment';

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

    // Convert Dates to moments
    const startDate = moment(this.state.startDate);
    const endDate = moment(this.state.endDate);

    // Format moments for output // TODO: move to Output
    const momentFormatStringOutput = "dddd, MMMM Do YYYY [at] h:mm a";
    const startDateFmtOutput = startDate.format(momentFormatStringOutput);
    const endDateFmtOutput = endDate.format(momentFormatStringOutput);

    // Calculate differences
    let totals = {};
    for (let increment of ["seconds","minutes","hours","days","months","years"]) {
      totals[`${increment}`] = endDate.diff(
        startDate,
        increment,
        true // return floating point number
      ).toFixed(2);
    }

    return (
      <div className="timeCalculator">
        <Input
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChangeStart={this.handleChangeStartDate}
          onChangeEnd={this.handleChangeEndDate}
        />
        <Output
          startDate={startDateFmtOutput}
          endDate={endDateFmtOutput}
          totals={totals}
        />
      </div>
    );
  }
}

export default TimeCalculator
