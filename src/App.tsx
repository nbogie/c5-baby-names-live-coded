import React from 'react';
import './App.css';
import babyNamesData from "./babyNamesData.json";

interface BabyNameData {
  name: string,
  id: number,
  sex: string
}

function App() {

  function makeBabyNameElement(nameData: BabyNameData) {
    return <div className={"babyName " + nameData.sex}>{nameData.name}</div>
  }

  return (
    <div className="App">
      <h3>Hello from App</h3>
      There are {babyNamesData.length} names.
      <div className="mainList">
        {babyNamesData.map(makeBabyNameElement)}
      </div>
    </div>
  );
}

export default App;
