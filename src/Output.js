import React from 'react';
import moment from 'moment';

// import Log from "./Log";

import './App.css';

export default function Output(props) {

  // Convert Dates to moments

  const startDate = moment(props.startDate);
  const endDate = moment(props.endDate);

  // Format moments for output

  const momentFormatString = "dddd MMMM Do Y [at] h:mm a";

  const startDateFmt = startDate.format(momentFormatString);
  const endDateFmt = endDate.format(momentFormatString);

  // Calculate difference in different units

  let totals = {};

  for (let unit of [

    "seconds",
    "minutes",
    "hours",
    "days",
    "months",
    "years"

  ]) {

    totals[unit] = endDate.diff(
      startDate,
      unit,
      true // return floating point number

    ).toFixed((

      [ "seconds", "minutes" ].includes(unit)
      ? 0
      : (

        unit === "years"
        ? 3
        : 2

      )

    ));

  }

  // Build output JSX

  const amounts = (Object.keys(totals)).map( (key) => {

    let amount = totals[key];

    return (

      <tr key={key}>

        <td>{amount}</td>
        <td>{key}</td>

      </tr>

    );

  });

  return (

    <div className="output">

      From {startDateFmt} to {endDateFmt}:

      <table className="amounts">
        <tbody>

          {amounts}

        </tbody>
      </table>

    </div>

  )
}
