const { insertionSort } = require("../../../dist/insertion");

describe("Test cases for insertion sort", function () {
  test("#1 test case", function () {
    const arr = [1, 4, 8, 2, 3, 7];
    const arr2 = [...arr];
    const result = insertionSort(arr);
    arr2.sort();
    expect(result).toEqual(arr2);
  });

  test("#2 test my function against lodash", function () {
    const arr = [1, 4, 8, 2, 3, 7];

    const result = insertionSort(arr);
    console.log(result);
  });
});

describe("Test cases for merge sort", function () {
  test("#1 test for merge sort", function () {
    console.log("----");
  });
});
