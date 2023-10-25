function sortArray(nums: number[]): number[] {
  const map = new Map<number, number>();
  nums.forEach((num) =>
    !map.has(num) ? map.set(num, 0) : map.set(num, map.get(num) + 1)
  );

  return Array.from(map.keys()).sort((a, b) => {
    return map.get(b) - map.get(a);
  });
}

console.log(sortArray([-2, 3, -5]));
