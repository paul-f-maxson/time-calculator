import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Input(props) {
  return (
    <h1>
      ~~Input goes here~~
    </h1>
  );
}

// TODO: Plural Logic
// TODO: Use a loop
function Output(props) {
  return (
    <div>
      <h1>From {props.startDate}{" "}
        at {props.startTime}{" "}
        to {props.endDate}{" "}
        at {props.endTime}, a total of:
        <ul>
          <li>{props.totals.secs} seconds elapsed</li>
          <li>{props.totals.mins} minutes elapsed</li>
          <li>{props.totals.hours} hours elapsed</li>
          <li>{props.totals.days} days elapsed</li>
          <li>{props.totals.months} months elapsed</li>
          <li>{props.totals.years} years elapsed</li>
        </ul>
      </h1>
    </div>
  )
}

class TimeCalculator extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("August 6, 2016 00:00:00"),
      endDate: new Date("August 7, 2017 00:00:00"),
    };

    this.millis =  {
        year : 3.154*10**10, // Milliseconds in a year
        month : 1.628*10**9, // Milliseconds in a month
        day : 8.64*10**7, // Milliseconds in a day
        hour : 3.60*10**6, // Milliseconds in an hour
        min : 6.00*10**4, // Milliseconds in a minute
        sec : 1000, // Milliseconds in a second
    }
  }

  render() {
    // TODO: Use a loop
    // TODO: Format date as Month dd, yyyy
    const startDateFmt = this.state.startDate.toLocaleDateString();
    const startTimeFmt = this.state.startDate.toLocaleTimeString();
    const endDateFmt = this.state.endDate.toLocaleDateString();
    const endTimeFmt = this.state.endDate.toLocaleTimeString();

    let diff = this.state.endDate.getTime() - this.state.startDate.getTime();

    let totals = {};
    // TODO: Use a loop
    totals.years = (diff / this.millis.year).toFixed(2);
    totals.months = (diff / this.millis.month).toFixed(2);
    totals.days = (diff / this.millis.day).toFixed(2);
    totals.hours = (diff / this.millis.hour).toFixed(2);
    totals.mins = (diff / this.millis.min).toFixed(2);
    totals.secs = (diff / this.millis.sec).toFixed(2);

    return (
      <div>
        <Input />
        <Output {}
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
