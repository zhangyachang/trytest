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



// 十进制转为二进制
let number10To2 = function (number) {
  console.log('拿到number = ' + number);
  let stack = new Stack();

  while (number !== 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }

  let result = '';
  while (stack.size()) {
    result += stack.pop();
  }
  return Number(result);
};

let a = number10To2(15);
console.log(a);



// 十进制转换为任意进制
let number10ToAny = function (number, base = 2) {
  console.log('拿到number = ' + number);

  let str = '0123456789abcdef';
  let stack = new Stack();
  
  console.log();
  console.log('15');

  while (number !== 0) {
    console.log(number % base)
    stack.push(str.charAt(number % base));
    number = Math.floor(number / base);
  }

  console.log('执行完毕');
  console.log(stack);
  let result = '';
  while (stack.size()) {
    result += stack.pop();
  }
  return result;
};


console.log(number10ToAny(25, 16));


