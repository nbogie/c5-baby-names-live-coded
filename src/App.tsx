import React from 'react';
import './App.css';
import babyNamesDataUnsorted from "./babyNamesData.json";
import { sortBabyNames } from './sortFunctions';
import { BabyNameData } from './types';


function App() {
  const sortedBabyNames = sortBabyNames(babyNamesDataUnsorted);
  function makeBabyNameElement(nameData: BabyNameData) {
    return <div className={"babyName " + nameData.sex}>{nameData.name}</div>
  }

  return (
    <div className="App">
      <h3>Hello from App</h3>
      There are {sortedBabyNames.length} names.
      <div className="mainList">
        {sortedBabyNames.map(makeBabyNameElement)}
      </div>
    </div>
  );
}


export default App;


