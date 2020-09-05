import React from 'react';
import logo from './logo.svg';
import './App.css';

import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import SearchingVisualizer from './SearchingVisualizer/SearchingVisualizer';

function App() {
  return (  
    <div className="App">
      <h1>Sorting Algorithm Visualizer</h1>
      <SortingVisualizer></SortingVisualizer>
      <h1>Searching Algorithm Visualizer</h1>
      <SearchingVisualizer></SearchingVisualizer>
    </div>
  );
}

export default App;
