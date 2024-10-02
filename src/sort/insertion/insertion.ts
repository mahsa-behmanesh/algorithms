export function InsertionSort(
  arr: Array<number>,
  decreasing: boolean = false
): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && decreasing ? arr[j] < key : arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}
