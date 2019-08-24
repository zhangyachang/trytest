/**
 * 后进先出
 * 
 * 创建栈结构时，它应该有哪些功能
 * 
 * 用来存储栈的数据
 * 添加数据 push
 * 取出并删除栈顶数据 pop
 * 返回栈顶数据 peek
 * 清空栈 clear
 * 返回栈中的数据长度 size
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(ele) {
    this.items.push(ele);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
}


let stack = new Stack();

console.log(stack);
stack.push(11);
stack.push(222);
stack.push(333);

console.log(stack);
/**
 * 这样做唯一的问题就是 通过 stack.items 就可以访问到栈中的所有值，可以任意的改变，不应该对外暴露这个值让任何人都可以改变
 */

console.log(stack.items);
