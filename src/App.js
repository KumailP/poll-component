import React from "react";
import "./App.css";
import Poll from "./components/Poll";

const options = [
  {
    label: "Natus Vincere",
    percentage: null,
    imageURL: null
  },
  {
    label: "Fnatic",
    percentage: null,
    imageURL: null
  }
];

function App() {
  return (
    <div className="App App-header">
      <Poll options={options} />
    </div>
  );
}

export default App;
