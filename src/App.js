import React from "react";
import "./App.css";
import Poll from "./components/Poll";

const options = [
  {
    label: "Cloud9",
    percentage: null,
    imgUrl: "Images/PartyD.png"
  },
  {
    label: "Natus Vincere",
    percentage: null,
    imgUrl: "Images/PartyB.png"
  },
  {
    label: "Fnatic",
    percentage: null,
    imgUrl: "Images/PartyC.png"
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
