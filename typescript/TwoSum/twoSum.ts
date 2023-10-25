/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums: number[], target: number): number[] {
  let complement: number;
  let num: number;
  let numsSet = new Map();

  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    complement = target - num;
    if (numsSet.has(complement)) {
      return [numsSet.get(complement), i];
    }

    numsSet.set(num, i);
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));
