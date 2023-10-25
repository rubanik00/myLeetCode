function isPalindrome(s: string): boolean {
  const cleanStr = s.toLowerCase().replace(/[^a-z]/gi, "");
  if (cleanStr === cleanStr.split("").reverse().join("")) return true;
  return false;
}

console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

function isPalindrome(s: string): boolean {
  const cleanStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const n = cleanStr.length;
  for (let i = 0; i < n; i++) {
    if (cleanStr[i] != cleanStr[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
