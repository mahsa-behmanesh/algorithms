const { InsertionSort } = require("../../../dist/sort/insertion/insertion");

describe("Test cases for insertion sort", function () {
  test("#1 test case increasing order : ", function () {
    const arr = [1, 4, 8, 2, 3, 7];
    const arr2 = [...arr];
    const result = InsertionSort(arr);
    console.log("result #1 :", result);
    arr2.sort();
    expect(result).toEqual(arr2);
  });

  test("#2 test case decreasing order : ", function () {
    const arr = [1, 4, 8, 2, 3, 7];
    const arr2 = [...arr];
    arr2.sort().reverse();
    const result = InsertionSort(arr, true);
    console.log("result #1 :", result);
    expect(result).toEqual(arr2);
  });

  test("#3 test my function against lodash", function () {
    const arr = [1, 4, 8, 2, 3, 7];
    const result = InsertionSort(arr);
    console.log("result #3 :", result);
  });
});
