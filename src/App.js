import React from 'react';
import './App.css';
import Poll from './components/Poll';

const options = [
  "Option A",
  "Option B",
  "Option C",
  "Option D",
  "Option E",
  "Option F",
  "Option G",
  "Option H",
  "Option I",
  "Option J"
]

function App() {
  return (
    <div className="App App-header">
      <Poll options={options} />
    </div>
  );
}

export default App;
