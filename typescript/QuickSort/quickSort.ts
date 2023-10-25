function quick_sort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quick_sort(left), pivot, ...quick_sort(right)];
}

console.log(quick_sort([1, 12, 34, 67, 0, 3, 55]));
