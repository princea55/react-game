import React from 'react';
import logo from './logo.svg';
import './mainapp.css';
import Lrb from '../src/LeftVSRight brain/LRB';
function App() {
  return (
    <div className="maindiv">
      <div>
        <h1>Mind game</h1>
      </div>
      <div>
        <Lrb/>
      </div>
    </div>
  );
}

export default App;
