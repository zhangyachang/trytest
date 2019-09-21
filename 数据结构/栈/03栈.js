
const Stack = (function () {
  let sym = Symbol();
  return class Stack {
    constructor() {
      this[sym] = [];
    }
    push(ele) {
      this[sym].push(ele);
    }
    pop() {
      return this[sym].pop();
    }
    peek() {
      return this[sym][this[sym].length - 1];
    }
    clear() {
      this[sym] = [];
    }
    size() {
      return this[sym].length;
    }
  }
})();


let stack = new Stack();
let stack2 = new Stack();

stack.push(111);
stack.push(222);
stack.push(333);
console.log(stack);

stack2.push(444);
console.log(stack2);
