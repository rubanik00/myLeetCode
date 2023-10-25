function countingSort(arr: number[]): number[] {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  let bucket = new Map();

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i] - min;
    bucket.set(current, bucket.get(current) + 1);
  }
  let arr2 = [];
  for (let i = 0; i < bucket.size; i++) {
    let counter = bucket.get(i);
    for (let j = 0; j < counter; j++) {
      arr2.push(i + min);
    }
  }

  return arr2;
}

console.log(countingSort([1, 3, 5, 12, 454, 23, 0, 1, 3, 0, 5, 7, 7]));
