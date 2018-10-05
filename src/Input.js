import React from 'react';
import DateTimePicker from "react-datetime-picker";
// import Log from "./Log";
import './App.css';

export default function Input(props) {

  const onChangeStart = date => {

    // Check
    if (!date) { // Caused by pressing the "X" button

      date = new Date();

      // Modify
      date.setSeconds(0);
      date.setMilliseconds(0);

    }

    //Submit
    props.onChangeStart(date);

  };

  const onChangeEnd = date => {

    // Check
    if (!date) { // Caused by pressing the "X" button

      date = new Date();

      // Modify
      date.setSeconds(0);
      date.setMilliseconds(0);

    }

    //Submit
    props.onChangeEnd(date);

  };

  return (
    <div className="input">
      <fieldset>

        <legend>Enter start and end dates</legend>

        <form>

          <div id="startDateInput">

            <label htmlFor="startDate">Start date: </label>

            <DateTimePicker
              id="startDate"
              value={props.startDate}
              onChange={onChangeStart}
              disableClock={true}
              type="number"
            />

          </div>

          <hr />

          <div id="startDateInput">

            <label htmlFor="endDate">End date: </label>

            <DateTimePicker
              id="endDate"
              value={props.endDate}
              onChange={onChangeEnd}
              disableClock={true}
            />

          </div>
        </form>

      </fieldset>
    </div>
  );
}
