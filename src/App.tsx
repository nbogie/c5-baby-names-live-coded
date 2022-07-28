import React, { useState } from 'react';
import './App.css';
import babyNamesDataUnsorted from "./babyNamesData.json";
import { sortBabyNames } from './sortFunctions';
import { BabyNameData } from './types';


function App() {
  console.log("APP FUNCTION CALLED - will re-render", new Date())
  const sortedBabyNames = sortBabyNames(babyNamesDataUnsorted);
  const [searchTerm, setSearchTerm] = useState("");

  //@ts-ignore
  function handleChangeToInputText(event) {
    console.log("handling change: event.target.value is >>" + event.target.value + "<<")
    setSearchTerm(event.target.value);
    console.log("after calling setSearchTerm, searchTerm is", searchTerm, "e.t.v is", event.target.value)
  }

  return (
    <div className="App">
      Search term is currently: {searchTerm}<hr />
      <input type="text" onChange={handleChangeToInputText} value={searchTerm} placeholder={"search term..."} />
      <button onClick={() => setSearchTerm("")}>CLEAR SEARCH</button>
      <hr />

      There are {sortedBabyNames.length} names.
      <div className="mainList" >
        {sortedBabyNames.map(makeBabyNameElement)}
      </div >
    </div >
  );
}


export default App;



function makeBabyNameElement(nameData: BabyNameData) {
  return <div
    key={nameData.id}
    className={"babyName " + nameData.sex}>{nameData.name}
  </div>
}

