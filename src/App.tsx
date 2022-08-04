import React, { useState } from 'react';
import './App.css';
import babyNamesDataUnsorted from "./babyNamesData.json";
import { findMatchingBabyNames } from './searchFunctions';
import { sortBabyNames } from './sortFunctions';
import { BabyNameData } from './types';
import { BabyName } from "./BabyName"

function App() {

  console.log("APP FUNCTION CALLED - will re-render", new Date())
  const allSortedBabyNames = sortBabyNames(babyNamesDataUnsorted);

  const [searchTerm, setSearchTerm] = useState("");

  const [favouriteBabyNames, setFavouriteBabyNames] = useState<BabyNameData[]>([]);

  console.log("MAKING A LIST OF FILTERED NAMES BASED ON ", searchTerm)

  //generate filteredBabyNames to show, based on the following:
  //  sortedBabyNames - those that don't match a search - those that are in favourites

  function isNotInFavourites(oneBabyName: BabyNameData): boolean {
    return (!favouriteBabyNames.includes(oneBabyName));
  }

  // write a function isInArray(arr, target)
  // which returns true if the reference "target" references an object in the arr, else returns false
  // 


  const namesMatchingSearch = findMatchingBabyNames(allSortedBabyNames, searchTerm);
  const mainBabyNames = namesMatchingSearch.filter(isNotInFavourites);

  //@ts-ignore
  function handleChangeToInputText(event) {
    console.log("handling change: event.target.value is >>" + event.target.value + "<<")
    setSearchTerm(event.target.value);
    console.log("after calling setSearchTerm, searchTerm is", searchTerm, "e.t.v is", event.target.value)
  }

  function handleAddToFavourites(oneNameData: BabyNameData) {
    // add oneNameData to favouriteBabyNames (managed state)
    //HOW?    
    // step 1: newFavouriteBabyNames = make a copy of favouriteBabyNames    
    // step 2: add oneNameData to newFavouriteBabyNames 
    // step 3: call the setter for favouriteBabyNames (setFavouriteBabyNames)    
    const newFavouriteBabyNames = [...favouriteBabyNames, oneNameData];
    setFavouriteBabyNames(newFavouriteBabyNames);
  }

  function handleRemoveFromFavourites(targetNameData: BabyNameData): void {
    //pseudocode
    //1. newFavourites = prepare new list of favourite baby names - a copy but missing the targetNameData one

    function doesNotMatchTarget(candidate: BabyNameData) {
      return !(candidate.name === targetNameData.name)
    }
    const newFavourites: BabyNameData[] = favouriteBabyNames.filter(doesNotMatchTarget);
    //2. call setFavouriteBabyNames with the newFavourites
    setFavouriteBabyNames(newFavourites);
  }

  return (
    <div className="App">
      Search term is currently: {searchTerm}<hr />
      <input type="text" onChange={handleChangeToInputText} value={searchTerm} placeholder={"search term..."} />
      <button onClick={() => setSearchTerm("")}>CLEAR SEARCH</button>
      <hr />


      <h2>Favourites List</h2>
      HERE
      <div className="favouritesList">
        {favouriteBabyNames.map(oneBabyName => (
          <BabyName
            key={oneBabyName.id}
            nameData={oneBabyName}
            clickyFunction={handleRemoveFromFavourites}
          />
        ))}
      </div>
      LOOK UP


      <h2>Main List</h2>
      There are {mainBabyNames.length} names.
      <div className="mainList" >
        {mainBabyNames.map(oneBabyName => (
          <BabyName
            key={oneBabyName.id}
            nameData={oneBabyName}
            clickyFunction={handleAddToFavourites}
          />
        ))}
      </div >
    </div >
  );


}


export default App;




