export const towerBuilder = (nFloors: number): string[] => {
  var str: Array<string> = new Array<string>();

  for (let i = 1; i < nFloors; i++) {
    for (let j = i; j < nFloors; j++) {
      str[i] = " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      str[k] = "*";
    }
  }
  return str;
};

console.log(towerBuilder(10));
