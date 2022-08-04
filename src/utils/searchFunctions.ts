import { BabyNameData } from "../types";

export function findMatchingBabyNames(
  namesData: BabyNameData[],
  searchValue: string
): BabyNameData[] {
  function oneMatchesSearchTerm(oneBabyNameElem: BabyNameData): boolean {
    return oneBabyNameElem.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  }

  return namesData.filter(oneMatchesSearchTerm);
}
