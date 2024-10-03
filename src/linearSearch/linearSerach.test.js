const { LinearSearch } = require("../../dist/linearSearch/linearSearch");

describe(" Test Casa for Linear Search : ", function () {
  test("Test #1 Linear Search : ", function () {
    const arr = [1, 2, 7, 6, 22, 3];
    const selectedNumber = 6;
    const result = LinearSearch(arr, selectedNumber);
    console.log(`Test #1 ${selectedNumber} is at index : `, result);
    expect(result).toEqual(3);
  });
});
