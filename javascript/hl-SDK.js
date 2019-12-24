(function () {
  console.log('window是什么', window);

  /**
   * 判断当前环境是什么环境
   */

  console.log(window);

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  function SDK() {
    
  }


  console.log('判断当前元素是否是window', isWindow(window));

  SDK.prototype = {

  };

})(window);