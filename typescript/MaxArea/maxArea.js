// function maxArea(height: number[]): number {
//   let res = 0;
//   let l = 0;
//   let r = height.length - 1;
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
//   while (l < r) {
//     let area = (r - l) * Math.min(height[l], height[r]);
//     res = Math.max(res, area);
//     if (height[l] < height[r]) {
//       l += 1;
//     } else {
//       r -= 1;
//     }
//   }
//   return res;
// }
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
function longestConsecutive(nums) {
    var e_1, _a;
    var set = new Set(nums);
    var longest = 0;
    try {
        for (var nums_1 = __values(nums), nums_1_1 = nums_1.next(); !nums_1_1.done; nums_1_1 = nums_1.next()) {
            var n = nums_1_1.value;
            if (!set.has(n - 1)) {
                var length_1 = 0;
                while (set.has(n + length_1)) {
                    length_1++;
                }
                longest = Math.max(length_1, longest);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (nums_1_1 && !nums_1_1.done && (_a = nums_1.return)) _a.call(nums_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return longest;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
