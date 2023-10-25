export function order(words: string) {
  const wordArr: String[] = words.split(" ");
  return wordArr.sort(
    (a, b) => +a.replace(/[^0-9.]/g, "") - +b.replace(/[^0-9.]/g, "")
  );
}

console.log(order("is2 Thi1s T4est 3a"));
