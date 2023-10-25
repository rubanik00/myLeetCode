export class Kata {
  static diceEntries: Set<string> = new Set<string>();

  static disemvowel(str: string): string {
    var str2: Array<string> = new Array<string>();
    this.diceEntries
      .add("A")
      .add("a")
      .add("E")
      .add("e")
      .add("I")
      .add("i")
      .add("O")
      .add("o")
      .add("U")
      .add("u");

    for (let i = 0; i < str.length; i++) {
      if (!this.diceEntries.has(str[i])) {
        str2.push(str[i]);
      }
    }

    return str2.join("");
  }
}

// export class Kata {
//   static disemvowel(str: string) {
//     return str.replace(/[aeiou]/gi, "");
//   }
// }

console.log(Kata.disemvowel("This website is for losers LOL!"));
