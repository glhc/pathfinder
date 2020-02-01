import React from 'react';
import Map from './components/Map/Map.js';

import './App.css';

function App() {
  const width = window.innerWidth;
  const height = window.innerWidth;

  return (
    <main>
      <Map width={width} height ={height}/>
    </main>
  );
}

export default App;
