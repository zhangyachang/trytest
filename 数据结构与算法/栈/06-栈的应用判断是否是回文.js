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


// 判断一串文字是否为回文
function isHuiwen(str){
  let stack = new Stack();

  [...str].forEach(v => {
    stack.push(v);
  });

  let result = '';
  while(stack.size()){
    result += stack.pop();
  }

  return result === str;
}


console.log(isHuiwen('sdfjsdf'));
console.log(isHuiwen('上海自来水来自海上'));




