function threeSum(nums) {
    var res = [];
    nums = nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        var l = i + 1;
        var r = nums.length - 1;
        while (l < r) {
            var sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r -= 1;
            }
            else if (sum < 0) {
                l += 1;
            }
            else {
                res.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while (nums[l] == nums[l - 1] && l < r) {
                    l += 1;
                }
            }
        }
    }
    return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1]));
