import React, { Component } from 'react';
import moment from 'moment';

import { Input, Output } from "./Presentational.js";

class TimeCalculator extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
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

    // Format moments for output
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
