import React from 'react';

import './App.css';

export function Input(props) {
  return (
    <div className="input">
      <h2>
        <fieldset>
          <legend>Enter start and end dates</legend>
          <form>
            <div id="startDateInput">
              <label htmlFor="startDate">Start date</label>
              <input type="date" id="startDate"
                name="startDate" value={props.startDate}
                min="0000-00-00" max="9999-12-31"
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
