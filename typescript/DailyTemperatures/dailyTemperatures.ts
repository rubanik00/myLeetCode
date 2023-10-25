function dailyTemperatures(temperatures: number[]): number[] {
  let stack = [];
  let output = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];
    while (stack.length > 0 && currentTemp > stack[stack.length - 1].val) {
      let { ind } = stack.pop();
      output[ind] = i - ind;
    }
    stack.push({ val: currentTemp, ind: i });
  }
  return output;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
