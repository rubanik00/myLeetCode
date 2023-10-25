function selectionSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = minIndex + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }

    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([1, 3, 2, 4, 7, 0]));
