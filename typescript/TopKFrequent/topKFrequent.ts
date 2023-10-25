/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:
*/

// function topK(nums: number[], k: number) {
//   const map = new Map<number, number>();

//   nums.forEach((num) =>
//     !map.has(num) ? map.set(num, 0) : map.set(num, map.get(num) + 1)
//   );
//   console.log(Array.from(map.keys()).sort((a, b) => map.get(a) - map.get(b)));

//   return Array.from(map.keys())
//     .sort((a, b) => {
//       return map.get(b) - map.get(a);
//     })
//     .slice(0, k);
// }

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  nums.forEach((num) =>
    !map.has(num) ? map.set(num, 0) : map.set(num, map.get(num) + 1)
  );
  return Array.from(map.keys())
    .sort((a, b) => {
      return map.get(b) - map.get(a);
    })
    .slice(0, k);
}

console.log(topKFrequent([1, 2, 2, 2, 3, 3], 2));
