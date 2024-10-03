const { SumArray } = require("../../../dist/sum/sumArray/sumArray");

describe("Test case for Sum Array : ", function () {
  test("Test #1 Sum Array : ", function () {
    const arr = [1, 5, 7];
    const result = SumArray(arr);
    console.log(`test #1 Sum Array ${arr} : `, result);
    expect(result).toEqual(13);
  });
});
