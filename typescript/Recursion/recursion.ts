function recursion_sum(arr: number[]): number {
  if (arr.length === 0) return 0;
  else return arr[0] + recursion_sum(arr.slice(1));
}

console.log(recursion_sum([2, 4, 7]));

function recursion_count_elem(arr: number[]): number {
  if (arr.length === 0) return 0;
  else return 1 + recursion_count_elem(arr.slice(1));
}

console.log(recursion_count_elem([2, 4, 7]));
