import React from "react";
import "./App.css";
import Poll from "./components/Poll";

const options = [
  {
    label: "Cloud9",
    percentage: 50,
    imgUrl: "Images/PartyD.png"
  },
  {
    label: "Natus Vincere",
    percentage: 20,
    imgUrl: "Images/PartyB.png"
  },
  {
    label: "Fnatic",
    percentage: 15,
    imgUrl: "Images/PartyC.png"
  },
  {
    label: "OG",
    percentage: 10,
    imgUrl: "Images/PartyA.png"
  },
  {
    label: "Virtus Pro",
    percentage: 7,
    imgUrl: "Images/PartyE.png"
  },
  {
    label: "Ninjas in Pyjamas",
    percentage: 2,
    imgUrl: "Images/PartyF.png"
  },
  {
    label: "Astralis",
    percentage: 2,
    imgUrl: "Images/PartyG.png"
  },
  {
    label: "Optic Gaming",
    percentage: 2,
    imgUrl: "Images/PartyH.png"
  },
  {
    label: "SK Gaming",
    percentage: 1,
    imgUrl: "Images/PartyI.png"
  },
  {
    label: "FaZe Clan",
    percentage: 1,
    imgUrl: "Images/PartyJ.png"
  }
];

function App() {
  return (
    <div className="App App-header">
      <Poll options={options.slice(0, 10)} />
    </div>
  );
}

export default App;
