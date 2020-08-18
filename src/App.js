import React from 'react';
import logo from './logo.svg';
import './mainapp.css';

import Mainapp from './Appbar';
function App() {
  return (
    <div className="maindiv">
      <div>
        <h1>Mind game</h1>
      </div>
      <div>
        <Mainapp/>
      </div>
    </div>
  );
}

export default App;
