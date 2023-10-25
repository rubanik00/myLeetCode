function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;

  for (const n of nums) {
    if (!set.has(n - 1)) {
      let length = 0;
      while (set.has(n + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 1, 3, 2]));
