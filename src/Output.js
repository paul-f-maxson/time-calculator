import React from 'react';
// import Log from "./Log";
import './App.css';

export default function Output(props) {
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
