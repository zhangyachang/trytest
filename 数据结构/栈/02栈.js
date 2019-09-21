
/**
 * 01.js中对外暴露了栈的内容，可能会想到使用闭包解决这个问题，写出了下面错误的写法
 * 
 */

const Stack = (function () {

  var item = [];
  return class Stack {
    constructor() {
    }
    push(ele) {
      item.push(ele);
    }
    pop() {
      return item.pop();
    }
    peek() {
      return item[item.length - 1];
    }
    clear() {
      item = [];
    }
    size() {
      return item.length;
    }
  }
})();


var stack = new Stack();

stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);


var stack2 = new Stack();
var stack2 = new Stack();
var stack2 = new Stack();

stack2.push(55);
// 因为上面的闭包中的 共享了 item 所有导致不同的实例共享了同一个栈 导致错误
console.log(stack.peek());
