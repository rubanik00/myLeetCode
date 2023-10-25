export function sumPairs(ints: number[], s: number): [number, number] | void {
  const numIndices = new Map();

  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i];

    if (numIndices.has(complement)) {
      return [complement, ints[i]];
    }

    numIndices.set(ints[i], i);
  }

  return undefined;
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
