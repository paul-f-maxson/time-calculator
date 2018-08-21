import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dateFormat from 'dateformat';

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
        at {props.startTime}{" "}
        to {props.endDate}{" "}
        at {props.endTime}:
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
      startDate: new Date(),
      endDate: new Date(),
    };

    this.millis =  {
        year : 3.154*10**10, // Milliseconds in a year
        month : 2.628*10**9, // Milliseconds in a month
        day : 8.64*10**7, // Milliseconds in a day
        hour : 3.60*10**6, // Milliseconds in an hour
        minute : 6.00*10**4, // Milliseconds in a minute
        second : 1000, // Milliseconds in a second
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name

    // TODO: convert from yyyy-mm-ddThh:mm
    console.log(value);
    this.setState({
      [name]: new Date(value),
    });
  }

  render() {
    // TODO: implement moment.js
    const startDateFmt = dateFormat(this.state.startDate, "longDate");
    const startTimeFmt = dateFormat(this.state.startDate, "shortTime");
    const endDateFmt = dateFormat(this.state.endDate, "longDate");
    const endTimeFmt = dateFormat(this.state.endDate, "shortTime");

    const diff = this.state.endDate.getTime() - this.state.startDate.getTime();

    let totals = {};

    for (var increment in this.millis) {
      totals[`${increment}s`] = (diff / this.millis[increment]).toFixed(2);
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
          startTime={startTimeFmt}
          endDate={endDateFmt}
          endTime={endTimeFmt}
          totals={totals}
        />
      </div>
    );
  }
}

export default TimeCalculator
