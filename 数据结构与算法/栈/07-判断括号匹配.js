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


let signMatch = function (str) {

  let stack = new Stack();
  let leftSign = ['(', '[', '{'];
  let rightSign = [')', ']', '}'];

  for (let i = 0; i < str.length; i++) {

    if (leftSign.includes(str.charAt(i))) {
      stack.push(str.charAt(i));
    } else if (rightSign.includes(str.charAt(i))) {
      // stack.peek.indexOf(leftSign)
      // leftSign.indexOf()
      if (leftSign.indexOf(stack.pop()) !== rightSign.indexOf(str.charAt(i))) {
        return false;
      }
    }
  }

  console.log('走到这里了吗');
  
  return stack.size() === 0;
}




console.log(signMatch('{{}}}'))
console.log(signMatch('(()){}'))

console.log(signMatch(`let signMatch = function (str) {

  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {

    if (leftSign.includes(str.charAt(i))) {
      stack.push(str.charAt(i));
    } else if (rightSign.includes(str.charAt(i))) {
      // stack.peek.indexOf(leftSign)
      // leftSign.indexOf()
      if (leftSign.indexOf(stack.pop()) !== rightSign.indexOf(str.charAt(i))) {
        return false;
      }
    }
  }

  console.log('走到这里了吗');
  
  return stack.size() === 0;
}`));
