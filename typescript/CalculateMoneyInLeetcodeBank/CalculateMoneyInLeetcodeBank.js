// function totalMoney(n: number): number {
//   var total: number = 0;
//   var day: number = 1;
//   var week: number = 0;
//   for (var i = 1; i <= n; i++) {
//     total = total + (week + day);
//     day++;
//     if (i % 7 === 0) {
//       week++;
//       day = 1;
//     }
//   }
//   return total;
// }
// console.log(totalMoney(10));
// export class Kata {
//   static diceEntries: Set<string> = new Set<string>();
//   static disemvowel(str: string): string {
//     var str2: Array<string> = new Array<string>();
//     this.diceEntries
//       .add("A")
//       .add("a")
//       .add("E")
//       .add("e")
//       .add("I")
//       .add("i")
//       .add("O")
//       .add("o")
//       .add("U")
//       .add("u");
//     for (let i = 0; i < str.length; i++) {
//       if (!this.diceEntries.has(str[i])) {
//         str2.push(str[i]);
//       }
//     }
//     return str2.join("");
//   }
// }
// export class Kata {
//   static disemvowel(str: string) {
//     return str.replace(/[aeiou]/gi, "");
//   }
// }
// console.log(Kata.disemvowel("This website is for losers LOL!"));
// export const towerBuilder = (nFloors: number): string[] => {
//   var str : Array<string> = new Array<string>();
//   for (let i = 1; i < nFloors; i++) {
//     for (let j = i; j < nFloors; j++) {
//       str[i] = " ";
//     }
//     for (let k = 0; k < (i*2)-1; k++) {
//       str[k] = "*";
//     }
//   }
//   return str;
// }
// console.log(towerBuilder(10));
// function getConcatenation(nums: number[]): number[] {
//   return nums.concat(nums.map((x) => x));
// }
// console.log(getConcatenation([1, 2, 3, 4, 5]));
// function sec2time(timeInSeconds: number) {
//   var pad = function (num: any, size: number) {
//       return ("000" + num).slice(size * -1);
//     },
//     hours = Math.floor(timeInSeconds / 60 / 60),
//     minutes = Math.floor(timeInSeconds / 60) % 60,
//     seconds = Math.floor(timeInSeconds - minutes * 60),
//     milliseconds = timeInSeconds.toString().slice(-3);
//   return (
//     pad(hours, 2) +
//     ":" +
//     pad(minutes, 2) +
//     ":" +
//     pad(seconds, 2) +
//     ":" +
//     pad(milliseconds, 2)
//   );
// }
// console.log(sec2time(0));
// export function sumPairs(ints: number[], s: number): [number, number] | void {
//   const numIndices = new Map();
//   for (let i = 0; i < ints.length; i++) {
//     const complement = s - ints[i];
//     if (numIndices.has(complement)) {
//       return [complement, ints[i]];
//     }
//     numIndices.set(ints[i], i);
//   }
//   return undefined;
// }
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// export function order(words: string) {
//   const wordArr: String[] = words.split(" ");
//   return wordArr.sort(
//     (a, b) => +a.replace(/[^0-9.]/g, "") - +b.replace(/[^0-9.]/g, "")
//   );
// }
// console.log(order("is2 Thi1s T4est 3a"));
// function containsDuplicate(nums: number[]): boolean {
//   let numsSet : Set<number> = new Set<number>;
//   for (const elem of nums) {
//     if (numsSet.has(elem)) {
//       return true;
//     } else {
//       numsSet.add(elem);
//     }
//   }
//   return false;
// };
// console.log(containsDuplicate([1,2,3,4,5,1]));
// function isAnagram(s: string, t: string): boolean {
//   let arrS = s.toLowerCase().split("");
//   let arrT = s.toLowerCase().split("");
//   return (
//     arrT.filter((each) => {
//       return arrS.indexOf(each) === -1;
//     }).length === 0
//   );
// }
// function twoSum(nums: number[], target: number): number[] {
//   let complement: number;
//   let num: number;
//   let numsSet = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     num = nums[i];
//     complement = target - num;
//     if (numsSet.has(complement)) {
//       return [numsSet.get(complement), i];
//     }
//     numsSet.set(num, i);
//   }
//   return [];
// }
// console.log(twoSum([3, 2, 4], 6));
// function groupAnagrams(strs: string[]): string[][] {
//   const map = new Map<string, string[]>();
//   for (let str of strs) {
//     const sortedStr = str.split("").sort().join("");
//     const foundKey = map.get(sortedStr);
//     if (foundKey) {
//       foundKey.push(str);
//       map.set(sortedStr, foundKey);
//       continue;
//     }
//     map.set(sortedStr, [str]);
//   }
//   return Array.from(map.values());
// }
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// function topKFrequent(nums: number[], k: number): number[] {
//   const map = new Map<number, number>();
//   nums.forEach((num) =>
//     !map.has(num) ? map.set(num, 0) : map.set(num, map.get(num) + 1)
//   );
//   return Array.from(map.keys())
//     .sort((a, b) => {
//       return map.get(b) - map.get(a);
//     })
//     .slice(0, k);
// }
// function topK(nums: number[], k: number) {
//   const map = new Map<number, number>();
//   nums.forEach((num) =>
//     !map.has(num) ? map.set(num, 0) : map.set(num, map.get(num) + 1)
//   );
//   console.log(Array.from(map.keys()).sort((a, b) => map.get(a) - map.get(b)));
//   return Array.from(map.keys())
//     .sort((a, b) => {
//       return map.get(b) - map.get(a);
//     })
//     .slice(0, k);
// }
// console.log(topK([1, 2, 2, 2, 3, 3], 2));
// function frequencySort(s: string): string {
//   const map = new Map();
//   const myArr = s.split("");
//   myArr.forEach((smb) =>
//     !map.has(smb) ? map.set(smb, 1) : map.set(smb, map.get(smb) + 1)
//   );
//   let res = [];
//   new Map([...map.entries()].sort((a, b) => b[1] - a[1])).forEach((k, v) =>
//     res.push(Array(k).fill(v))
//   );
//   return res.flat().join("");
// }
// console.log(frequencySort("aaacccbbbb"));
// function topKFrequentStr(words: string[], k: number): string[] {
//   const map = new Map<string, number>();
//   words.forEach((word) =>
//     !map.has(word) ? map.set(word, 1) : map.set(word, map.get(word) + 1)
//   );
//   return Array.from(map.keys())
//     .sort((a, b) => {
//       return map.get(b) - map.get(a) || a.localeCompare(b);
//     })
//     .slice(0, k);
// }
// console.log(topKFrequentStr(["i", "love", "leetcode", "i", "love", "coding"], 2));
// function sortArray(nums: number[]): number[] {
//   const map = new Map<number, number>();
//   nums.forEach((num) =>
//     !map.has(num) ? map.set(num, 0) : map.set(num, map.get(num) + 1)
//   );
//   return Array.from(map.keys()).sort((a, b) => {
//     return map.get(b) - map.get(a);
//   });
// }
// console.log(sortArray([-2, 3, -5]));
// function productExceptSelf(nums: number[]): number[] {
//   const array: Array<number> = [];
//   let product: number = 1;
//   for (let idx = 0; idx < nums.length; idx++) {
//     array[idx] = product;
//     console.log("array[" + idx + "] = " + product);
//     console.log(product + " *= " + nums[idx]);
//     product *= nums[idx];
//   }
//   console.log(array);
//   console.log(product);
//   product = 1;
//   for (let idx = nums.length - 1; idx >= 0; idx--) {
//     array[idx] *= product;
//     product *= nums[idx];
//   }
//   return array;
// }
// console.log(productExceptSelf([1, 2, 3, 4]));
// function isValidSudoku(board: string[][]): boolean {
//   const rows = {};
//   const cols = {};
//   const squares = {};
//   for (let r = 0; r < 9; r++) {
//     for (let c = 0; c < 9; c++) {
//       const num = board[r][c];
//       if (num === ".") {
//         continue;
//       }
//       const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;
//       if (!cols[c]) {
//         cols[c] = new Set();
//       }
//       if (!rows[r]) {
//         rows[r] = new Set();
//       }
//       if (!squares[grid]) {
//         squares[grid] = new Set();
//       }
//       if (rows[r].has(num) || cols[c].has(num) || squares[grid].has(num)) {
//         return false;
//       }
//       cols[c].add(num);
//       rows[r].add(num);
//       squares[grid].add(num);
//     }
//   }
//   return true;
// }
// function isValidSudoku(board: string[][]): boolean {
//   var isValid = true;
//   var sudokuSet: Set<String> = new Set();
//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board.length; j++) {
//       if (board[i][j] === ".") {
//         continue;
//       }
//       if (
//         sudokuSet.has(`row ${i} number ${board[i][j]}`) ||
//         sudokuSet.has(`column ${j} number ${board[i][j]}`) ||
//         sudokuSet.has(
//           `box ${Math.floor(i / 3)} ${Math.floor(j / 3)} number ${board[i][j]}`
//         )
//       ) {
//         return false;
//       } else {
//         sudokuSet.add(`row ${i} number ${board[i][j]}`);
//         sudokuSet.add(`column ${j} number ${board[i][j]}`);
//         sudokuSet.add(
//           `box ${Math.floor(i / 3)} ${Math.floor(j / 3)} number ${board[i][j]}`
//         );
//       }
//     }
//   }
//   return isValid;
// }
// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ])
// );
// function longestConsecutive(nums: number[]): number {
//   const set = new Set(nums);
//   let longest = 0;
//   for (const n of nums) {
//     if (!set.has(n - 1)) {
//       let length = 0;
//       while (set.has(n + length)) {
//         length++;
//       }
//       longest = Math.max(length, longest);
//     }
//   }
//   return longest;
// }
// console.log(longestConsecutive([100, 4, 200, 1, 1, 3, 2]));
// // Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
// function getLinkedList(arr: number[]) {
//   const head = arr.reverse().reduce((a, b) => {
//     if (!a) {
//       a = new ListNode(b);
//     } else {
//       a = new ListNode(b, a);
//     }
//     return a;
//   }, null);
//   return new ListNode(head);
// }
// function hasCycle(head: ListNode | null): boolean {
//   let slow = head;
//   let fast = head;
//   while (slow && fast) {
//     slow = slow.next;
//     fast = fast.next?.next;
//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// }
// const simpleList = new ListNode(
//   0,
//   new ListNode(1, new ListNode(2, new ListNode(3)))
// );
// const cycleList = new ListNode(
//   0,
//   new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, simpleList))))
// );
// console.log(hasCycle(simpleList));
// console.log(hasCycle(simpleList));
// console.log(getLinkedList([1, 2, 3, 4, 1]));
// function selectionSort(arr: number[]): number[] {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let minIndex = i;
//     for (let j = minIndex + 1; j < n; j++) {
//       if (arr[minIndex] > arr[j]) minIndex = j;
//     }
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }
// console.log(selectionSort([1, 3, 2, 4, 7, 0]));
// function bubbleSort(arr: number[]): number[] {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       let temp = arr[i];
//       if (temp > arr[j]) {
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([3, 1, 5, 4, 2, -1, 12, 42, 0, 0, 2, 4, 55]));
// function insertionSort(arr: number[]): number[] {
//   const n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
//   return arr;
// }
// console.log(insertionSort([3, 1, 5, 4, 2, -1, 12]));
// function countingSort(arr: number[]): number[] {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   let bucket = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i] - min;
//     bucket.set(current, bucket.get(current) + 1);
//   }
//   let arr2 = [];
//   for (let i = 0; i < bucket.size; i++) {
//     let counter = bucket.get(i);
//     for (let j = 0; j < counter; j++) {
//       arr2.push(i + min);
//     }
//   }
//   return arr2;
// }
// console.log(countingSort([1, 3, 5, 12, 454, 23, 0, 1, 3, 0, 5, 7, 7]));
// interface IStack<T> {
//   push(item: T): void;
//   pop(): T | undefined;
//   top(): T | undefined;
//   size(): number;
// }
// class Stack<T> implements IStack<T> {
//   private storage: T[] = [];
//   constructor(private capacity: number = Infinity) {}
//   push(item: T): void {
//     if (this.size() === this.capacity) {
//       throw Error("Stack has reached max capacity, you cannot add more items");
//     }
//     this.storage.push(item);
//   }
//   pop(): T | undefined {
//     return this.storage.pop();
//   }
//   top(): T | undefined {
//     return this.storage[this.size() - 1];
//   }
//   size(): number {
//     return this.storage.length;
//   }
//   empty(): boolean {
//     return this.storage.length === 0;
//   }
// }
// function isOpen(str: string): boolean {
//   if (str === "{" || str === "[" || str === "(") return true;
//   return false;
// }
// function isPair(str1: string, str2: string): boolean {
//   if (
//     (str1 === "{" && str2 === "}") ||
//     (str1 === "[" && str2 === "]") ||
//     (str1 === "(" && str2 === ")")
//   )
//     return true;
//   return false;
// }
// function isValidStack(str: string): boolean {
//   const stack: Stack<string> = new Stack<string>();
//   for (let i = 0; i < str.length; i++) {
//     if (isOpen(str[i])) {
//       stack.push(str[i]);
//     } else {
//       if (!stack.empty() && isPair(stack.top(), str[i])) stack.pop();
//       else return false;
//     }
//   }
//   return stack.empty();
// }
// function evalRPN(tokens: string[]): number {
//   let stack: number[] = [];
//   function operate(a: number, b: number, operation: string): number {
//     switch (operation) {
//       case "+":
//         return a + b;
//       case "-":
//         return a - b;
//       case "*":
//         return a * b;
//       case "/":
//         return Math.trunc(a / b);
//     }
//   }
//   for (let token of tokens) {
//     if (Number.isInteger(parseInt(token))) stack.push(parseInt(token));
//     else {
//       const num1 = stack.pop();
//       const num2 = stack.pop();
//       const num3 = operate(num2, num1, token);
//       stack.push(num3);
//     }
//   }
//   return stack[0];
// }
// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// function binarySearch(arr: number[], searchNum: number): number | null {
//   let low: number = 0;
//   let hight: number = arr.length - 1;
//   let mid;
//   while (low <= hight) {
//     mid = Math.trunc((low + hight) / 2);
//     let guess = arr[mid];
//     if (guess === searchNum) {
//       return mid;
//     }
//     if (guess > searchNum) {
//       hight = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return null;
// }
// console.log(
//   binarySearch(
//     [
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
//       39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
//       57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
//       75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
//       93, 94, 95, 96, 97, 98, 99,
//     ],
//     15
//   )
// );
// function generateParenthesis(n: number): string[] {
//   const stack: string[] = [];
//   const res: string[] = [];
//   function backtrack(openN: number, closedN: number) {
//     if (openN === n && closedN === n) {
//       res.push(stack.join(""));
//       return;
//     }
//     if (openN < n) {
//       stack.push("(");
//       backtrack(openN + 1, closedN);
//       stack.pop();
//     }
//     if (closedN < openN) {
//       stack.push(")");
//       backtrack(openN, closedN + 1);
//       stack.pop();
//     }
//   }
//   backtrack(0, 0);
//   return res;
// }
// console.log(generateParenthesis(2));
// function dailyTemperatures(temperatures: number[]): number[] {
//   let stack = [];
//   let output = new Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     let currentTemp = temperatures[i];
//     while (stack.length > 0 && currentTemp > stack[stack.length - 1].val) {
//       let { ind } = stack.pop();
//       output[ind] = i - ind;
//     }
//     stack.push({ val: currentTemp, ind: i });
//   }
//   return output;
// }
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
// console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
// function carFleet(target: number, position: number[], speed: number[]): number {
//   var combined = [];
//   var stack = [];
//   for (var i = 0; i < position.length; i++) {
//     combined.push([position[i], speed[i]]);
//   }
//   combined.sort((a, b) => b[0] - a[0]);
//   var reachingTime = 0;
//   var fleet = 0;
//   for (var [pos, spd] of combined) {
//     var time = (target - pos) / spd;
//     if (time > reachingTime) {
//       fleet++;
//       reachingTime = time;
//     }
//   }
// }
// console.log();
// function test() {
//   const str = "60234566".split(" ").join("");
//   console.log(str);
//   //   console.log(parseInt(str));
// }
// test();
// function recursion_sum(arr: number[]): number {
//   if (arr.length === 0) return 0;
//   else return arr[0] + recursion_sum(arr.slice(1));
// }
// console.log(recursion_sum([2, 4, 7]));
// function recursion_count_elem(arr: number[]): number {
//   if (arr.length === 0) return 0;
//   else return 1 + recursion_count_elem(arr.slice(1));
// }
// console.log(recursion_count_elem([2, 4, 7]));
// function quick_sort(arr: number[]): number[] {
//   if (arr.length <= 1) return arr;
//   let pivot = arr[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quick_sort(left), pivot, ...quick_sort(right)];
// }
// console.log(quick_sort([1, 12, 34, 67, 0, 3, 55]));
// function isPalindrome(s: string): boolean {
//   const cleanStr = s.toLowerCase().replace(/[^a-z]/gi, "");
//   if (cleanStr === cleanStr.split("").reverse().join("")) return true;
//   return false;
// }
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// function isPalindrome(s: string): boolean {
//   const cleanStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   const n = cleanStr.length;
//   for (let i = 0; i < n; i++) {
//     if (cleanStr[i] != cleanStr[n - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// // console.log(isPalindrome("race a car"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
function marge_sort(arr) {
    if (arr.length <= 1)
        return arr;
    var n = Math.floor(arr.length / 2);
    var left = [];
    var right = [];
    for (var i = 0; i < n; i++) {
        left.push(arr[i]);
    }
    for (var j = n; j < arr.length; j++) {
        right.push(arr[j]);
    }
    function marge(left, right) {
        var marged = [];
        var left_i = 0, right_i = 0;
        while (left_i < left.length && right_i < right.length) {
            if (left[left_i] <= right[right_i]) {
                marged.push(left[left_i++]);
            }
            else {
                marged.push(right[right_i++]);
            }
        }
        while (left_i < left.length) {
            marged.push(left[left_i++]);
        }
        while (right_i < right.length) {
            marged.push(right[right_i++]);
        }
        return marged;
    }
    return marge(marge_sort(left), marge_sort(right));
}
console.log(marge_sort([1, 12, 34, 67, 0, 3, 55]));
