function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    let low: number = 0;
    let hight: number = matrix[i].length - 1;
    let mid;
    while (low <= hight) {
      mid = Math.trunc((low + hight) / 2);

      let guess = matrix[i][mid];

      if (guess === target) {
        return true;
      }
      if (guess > target) {
        hight = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
