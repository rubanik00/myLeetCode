interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  top(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  top(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  empty(): boolean {
    return this.storage.length === 0;
  }
}

function isOpen(str: string): boolean {
  if (str === "{" || str === "[" || str === "(") return true;
  return false;
}

function isPair(str1: string, str2: string): boolean {
  if (
    (str1 === "{" && str2 === "}") ||
    (str1 === "[" && str2 === "]") ||
    (str1 === "(" && str2 === ")")
  )
    return true;
  return false;
}

function isValidStack(str: string): boolean {
  const stack: Stack<string> = new Stack<string>();
  for (let i = 0; i < str.length; i++) {
    if (isOpen(str[i])) {
      stack.push(str[i]);
    } else {
      if (!stack.empty() && isPair(stack.top(), str[i])) stack.pop();
      else return false;
    }
  }
  return stack.empty();
}

console.log(isValidStack("[(({()}))]"));
