import React, { Component } from 'react';
import moment from 'moment';

import { Input, Output } from "./Presentational.js";

class TimeCalculator extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: moment(value),
    });
  }

  render() {
    // TODO: Move these calculations to Output

    const momentFormatString = "dddd, MMMM Do YYYY [at] h:mm a";
    const startDateFmt = this.state.startDate.format(momentFormatString);
    const endDateFmt = this.state.endDate.format(momentFormatString);

    let totals = {};

    for (let increment of ["seconds","minutes","hours","days","months","years"]) {
      totals[`${increment}`] = this.state.endDate.diff(
        this.state.startDate,
        increment,
        true // return floating point number
      ).toFixed(2);
    }

    return (
      <div className="timeCalculator">
        <Input
          onChange={(e) => this.handleChange(e)}
        />
        <Output
          startDate={startDateFmt}
          endDate={endDateFmt}
          totals={totals}
        />
      </div>
    );
  }
}

export default TimeCalculator
