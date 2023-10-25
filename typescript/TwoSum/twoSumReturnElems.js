function twoSum(numbers, target) {
    var n = numbers.length;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (numbers[i] + numbers[j] == target)
                return [i + 1, j + 1];
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
function twoSumV2(numbers, target) {
    var L = 0;
    var R = numbers.length - 1;
    while (L != R - 1 || numbers[L] + numbers[R] !== target) {
        if (numbers[L] + numbers[R] > target) {
            R = R - 1;
        }
        else {
            L = L + 1;
        }
    }
    return [L + 1, R + 1];
}
console.log(twoSumV2([2, 7, 11, 15], 2234));
