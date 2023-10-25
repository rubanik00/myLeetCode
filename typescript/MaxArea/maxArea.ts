function maxArea(height: number[]): number {
  let res = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return res;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
