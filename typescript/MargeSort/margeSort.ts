function marge_sort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const n = Math.floor(arr.length / 2);
  let left = [];
  let right = [];

  for (let i = 0; i < n; i++) {
    left.push(arr[i]);
  }
  for (let j = n; j < arr.length; j++) {
    right.push(arr[j]);
  }

  function marge(left: number[], right: number[]): number[] {
    let marged = [];
    let left_i = 0,
      right_i = 0;

    while (left_i < left.length && right_i < right.length) {
      if (left[left_i] <= right[right_i]) {
        marged.push(left[left_i++]);
      } else {
        marged.push(right[right_i++]);
      }
    }
    while (left_i < left.length) {
      marged.push(left[left_i++]);
    }

    while (right_i < right.length) {
      marged.push(right[right_i++]);
    }
    return marged;
  }

  return marge(marge_sort(left), marge_sort(right));
}

console.log(marge_sort([1, 12, 34, 67, 0, 3, 55]));
