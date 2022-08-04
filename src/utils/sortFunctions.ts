import { BabyNameData } from "../types";

export function sortBabyNames(nameDataArray: BabyNameData[]): BabyNameData[] {
  return [...nameDataArray].sort(compareTwoBabyDataObjects);
}
function compareTwoBabyDataObjects(
  obj1: BabyNameData,
  obj2: BabyNameData
): -1 | 0 | 1 {
  if (obj1.name < obj2.name) {
    return -1;
  }
  if (obj1.name > obj2.name) {
    return 1;
  }
  return 0;
}
