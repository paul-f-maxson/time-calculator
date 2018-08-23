import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dateFormat from 'dateformat';
const moment = require('moment');

function Input(props) {
  return (
    <div className="input">
      <h2>
        <fieldset>
          <legend>Enter start and end dates</legend>
          <div>
            <div className="startDateInput">
              <label htmlFor="startDate">Start date/time:</label>
              <input type="datetime-local" id="startDate"
                name="startDate" value={props.startDate}
                min="0000-00-00T00:00" max="9999-12-31T24:59"
                onChange={props.onChange}
              />
            </div>
            <div className="endDateInput">
              <label htmlFor="endDate">End date/time:</label>
              <input type="datetime-local" id="endDate"
                name="endDate" value={props.endDate}
                min="0000-00-00T00:00" max="9999-12-31T24:59"
                onChange={props.onChange}
              />
            </div>
          </div>
        </fieldset>
      </h2>
    </div>
  );
}

function Output(props) {
  const amounts = (Object.keys(props.totals)).map((key) => {
    let amount = props.totals[key];
    return (
      <li key={key}>{amount} {key}</li>
    );
  });

  return (
    <div className="output">
      <h1 className="dateRange">
        From {props.startDate}{" "}
        to {props.endDate}:
        <ul className="amounts">
          {amounts}
        </ul>
      </h1>
    </div>
  )
}

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
    const name = target.name

    console.log(value);
    this.setState({
      [name]: moment(value),
    });
  }

  render() {
    const momentFormatString = "dddd, MMMM Do YYYY [at] h:mm a";
    const startDateFmt = this.state.startDate.format(momentFormatString);
    const endDateFmt = this.state.endDate.format(momentFormatString);

    let totals = {};

    for (let increment of ["seconds","minutes","hours","days","months","years"]) {
      totals[`${increment}`] = this.state.endDate.diff(
        this.state.startDate,
        increment,
        true
      ).toFixed(2);
    }

    return (
      <div className="timeCalculator">
        <Input
          // NOTE: Callback may need passed in a different format
          onChange={(e) => this.handleChange(e)}
        />
        <Output
          // TODO: be more concise, use an object
          startDate={startDateFmt}
          endDate={endDateFmt}
          totals={totals}
        />
      </div>
    );
  }
}

export default TimeCalculator
