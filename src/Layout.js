import React from 'react';
import "./Layout.css"
import './App.css';

import TimeCalculator from "./TimeCalculator"

const Layout = () => (
  <div className="App-container">
    <div className="App">
      <TimeCalculator />
    </div>
  </div>
)

export default Layout;
