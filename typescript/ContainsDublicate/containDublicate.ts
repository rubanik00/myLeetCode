function containsDuplicate(nums: number[]): boolean {
  let numsSet : Set<number> = new Set<number>;
  for (const elem of nums) {
    if (numsSet.has(elem))
      return true;
    numsSet.add(elem);
  }
  return false;
};

console.log(containsDuplicate([1,2,3,4,5,1]));