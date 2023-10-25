function searchMatrix(matrix, target) {
    for (var i = 0; i < matrix.length; i++) {
        var low = 0;
        var hight = matrix[i].length - 1;
        var mid = void 0;
        while (low <= hight) {
            mid = Math.trunc((low + hight) / 2);
            var guess = matrix[i][mid];
            if (guess === target) {
                return true;
            }
            if (guess > target) {
                hight = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
    }
    return false;
}
console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
], 61));
