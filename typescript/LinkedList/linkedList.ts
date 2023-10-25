// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getLinkedList(arr: number[]) {
  const head = arr.reverse().reduce((a, b) => {
    if (!a) {
      a = new ListNode(b);
    } else {
      a = new ListNode(b, a);
    }
    return a;
  }, null);

  return new ListNode(head);
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (slow && fast) {
    slow = slow.next;
    fast = fast.next?.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

const simpleList = new ListNode(
  0,
  new ListNode(1, new ListNode(2, new ListNode(3)))
);
const cycleList = new ListNode(
  0,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, simpleList))))
);

console.log(hasCycle(simpleList));
console.log(hasCycle(simpleList));
console.log(getLinkedList([1, 2, 3, 4, 1]));
