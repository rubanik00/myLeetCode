function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
    let k = Math.trunc((l + r) / 2);
    let hours = 0;
    for (const p of piles) {
      hours += Math.ceil(p / k);
    }
    if (hours <= h) {
      res = Math.min(res, k);
      r = k - 1;
    } else {
      l = k + 1;
    }
  }
  return res;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
