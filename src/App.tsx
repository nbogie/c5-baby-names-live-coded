import { useState } from 'react';
import './App.css';
import { BabyNameList } from './BabyNameList';
import babyNamesDataUnsorted from "./data/babyNamesData.json";
import { SearchBar } from './SearchBar';
import { findMatchingBabyNames } from './searchFunctions';
import { sortBabyNames } from './sortFunctions';
import { BabyNameData } from './types';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const [favouriteBabyNames, setFavouriteBabyNames] = useState<BabyNameData[]>([]);

  const allSortedBabyNames = sortBabyNames(babyNamesDataUnsorted);


  //generate filteredBabyNames to show, based on the following:
  //  sortedBabyNames - those that don't match a search - those that are in favourites
  const namesMatchingSearch = findMatchingBabyNames(allSortedBabyNames, searchTerm);
  const mainBabyNames = namesMatchingSearch.filter(isNotInFavourites);
  function isNotInFavourites(oneBabyName: BabyNameData): boolean {
    return (!favouriteBabyNames.includes(oneBabyName));
  }

  function handleAddToFavourites(oneNameData: BabyNameData) {
    // Add oneNameData to our favourites (which are in react-managed state)
    // step 1: newFavouriteBabyNames = make a copy of favouriteBabyNames    
    // step 2: add oneNameData to newFavouriteBabyNames 
    const newFavouriteBabyNames = [...favouriteBabyNames, oneNameData];
    // step 3: ...
    setFavouriteBabyNames(newFavouriteBabyNames);
  }

  function handleRemoveFromFavourites(targetNameData: BabyNameData): void {
    function doesNotMatchTarget(candidate: BabyNameData) {
      return candidate.name !== targetNameData.name;
    }
    //STEP 1. newFavourites = prepare new, copied list of 
    //favourite baby names but MISSING the targetNameData one
    const newFavourites: BabyNameData[] = favouriteBabyNames.filter(doesNotMatchTarget);
    //STEP 2....
    setFavouriteBabyNames(newFavourites);
  }

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />

      <h2>Favourites List</h2>
      <BabyNameList names={favouriteBabyNames} onClick={handleRemoveFromFavourites} className="favouriteBabyNameList" />

      <h2>Main List</h2>
      There are {mainBabyNames.length} names.
      <BabyNameList names={mainBabyNames} onClick={handleAddToFavourites} className="mainBabyNameList" />
    </div >
  );
}


export default App;
