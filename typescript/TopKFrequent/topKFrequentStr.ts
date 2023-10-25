function topKFrequentStr(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  words.forEach((word) =>
    !map.has(word) ? map.set(word, 1) : map.set(word, map.get(word) + 1)
  );

  return Array.from(map.keys())
    .sort((a, b) => {
      return map.get(b) - map.get(a) || a.localeCompare(b);
    })
    .slice(0, k);
}

console.log(
  topKFrequentStr(["i", "love", "leetcode", "i", "love", "coding"], 2)
);
