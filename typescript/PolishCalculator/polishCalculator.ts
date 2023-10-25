function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  function operate(a: number, b: number, operation: string): number {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return Math.trunc(a / b);
    }
    return 0;
  }

  for (let token of tokens) {
    if (Number.isInteger(parseInt(token))) stack.push(parseInt(token));
    else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      const num3 = operate(num2, num1, token);
      stack.push(num3);
    }
  }
  return stack[0];
}
console.log(evalRPN(["2", "1", "+", "3", "*"]));
