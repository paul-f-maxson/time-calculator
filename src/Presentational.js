import React from 'react';
import DateTimePicker from "react-datetime-picker";
import './App.css';

export function Input(props) {

  return (
    <div className="input">
      <h2>
        <fieldset>
          <legend>Enter start and end dates</legend>
          <form>
            <div id="startDateInput">
              <label htmlFor="startDate">Start date: </label>
              <DateTimePicker
                id="startDate"
                value={props.startDate}
                onChange={props.onChangeStart}
              />
            </div>
            <hr />
            <div id="startDateInput">
              <label htmlFor="endDate">End date: </label>
              <DateTimePicker
                id="endDate"
                value={props.endDate}
                onChange={props.onChangeEnd}
              />
            </div>
          </form>
        </fieldset>
      </h2>
    </div>
  );
}

export function Output(props) {
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
