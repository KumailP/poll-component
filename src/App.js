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
  },
  {
    label: "OG",
    percentage: null,
    imgUrl: "Images/PartyA.png"
  },
  {
    label: "Virtus Pro",
    percentage: null,
    imgUrl: "Images/PartyE.png"
  },
  {
    label: "Ninjas in Pyjamas",
    percentage: null,
    imgUrl: "Images/PartyF.png"
  },
  {
    label: "Astralis",
    percentage: null,
    imgUrl: "Images/PartyG.png"
  },
  {
    label: "Optic Gaming",
    percentage: null,
    imgUrl: "Images/PartyH.png"
  },
  {
    label: "SK Gaming",
    percentage: null,
    imgUrl: "Images/PartyI.png"
  },
  {
    label: "FaZe Clan",
    percentage: null,
    imgUrl: "Images/PartyJ.png"
  }
];

function App() {
  return (
    <div className="App App-header">
      <Poll options={options.slice(1, 10)} />
    </div>
  );
}

export default App;
