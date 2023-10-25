function frequencySort(s: string): string {
  const map = new Map();
  const myArr = s.split("");

  myArr.forEach((smb) =>
    !map.has(smb) ? map.set(smb, 1) : map.set(smb, map.get(smb) + 1)
  );

  let res = [];
  new Map([...map.entries()].sort((a, b) => b[1] - a[1])).forEach((k, v) =>
    res.push(Array(k).fill(v))
  );

  return res.flat().join("");
}

console.log(frequencySort("aaacccbbbb"));
