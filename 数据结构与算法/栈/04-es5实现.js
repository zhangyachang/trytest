/*
var Stack = function () {
  var item = [];
  return {
    push: function () { },
    pop: function () { },
    peek: function () { },
    clear: function () { },
    size: function () { }
  }
}

*/


/*;

  上面那种可以了 再想一种好的实现方式
var Stack = (function () {

  var Stack = function () { }

  Stack.prototype.push = function () { };
  Stack.prototype.pop = function () { };
  Stack.prototype.peek = function () { };
  Stack.prototype.clear = function () { };
  Stack.prototype.size = function () { };

  return Stack;
})();

*/


