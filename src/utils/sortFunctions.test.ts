import { sortBabyNames } from "./sortFunctions";

test("baby names should sort ok", () => {
  const inputNames = [
    {
      id: 10,
      name: "Niamh",
      sex: "f",
    },
    {
      id: 2,
      name: "Will",
      sex: "m",
    },
    {
      id: 6,
      name: "Bhawick",
      sex: "m",
    },
  ];

  const expectedSortedOutput = [
    {
      id: 6,
      name: "Bhawick",
      sex: "m",
    },
    {
      id: 10,
      name: "Niamh",
      sex: "f",
    },
    {
      id: 2,
      name: "Will",
      sex: "m",
    },
  ];
  expect(sortBabyNames(inputNames)).toStrictEqual(expectedSortedOutput);
});
