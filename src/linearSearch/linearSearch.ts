export function LinearSearch(
  arr: number[],
  selectedNumber: number
): number | "Not Exist" | undefined {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == selectedNumber) {
      return (result = i);
    }
  }

  return result ?? "Not Exist";
}
