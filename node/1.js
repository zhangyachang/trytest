function A(){
	//假设A有属性test
	this.test = '1';
}

function B(){
	var a = new A;
	a.test = '2';
}
var C = new B;
var D = new A;
console.log(D.test); // => 2 应该得到1，但我们得到了2