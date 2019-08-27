
const Queue = (function () {
  let sym = Symbol();
  return class {
    constructor() {
      this[sym] = [];
      this.isRun = false;
    }
    enqueue(ele) {
      this[sym].push(ele);
    }
    dequeue() {
      return this[sym].shift();
    }
    first() {
      return this[sym][0];
    }
    clear() {
      this[sym] = [];
    }
    size() {
      return this[sym].length;
    }
    print() {
      this[sym].forEach(v => {
        console.log(v);
      });
    }

    run(){
      if(this.isRun) return ;
      this.isRun = true;
      (function r(){
        if(this.size() > 0){
          new Promise(this.dequeue())
            .then(r.bind(this))

        }else{
          this.isRun = false;
        }
      }).call(this);
    }
  }
})();


let queue = new Queue();

queue.enqueue((res) => {
  console.log('3s之后完成');
  setTimeout(res, 3000);
});
queue.enqueue((res) => {
  console.log('1s之后完成');
  setTimeout(res, 1000);
});
queue.enqueue((res) => {
  console.log('5s之后完成');
  setTimeout(res, 5000);
});
queue.enqueue(res => {
  console.log('完成了');
  setTimeout(res, 0);
});



console.log(queue);

queue.run();


// let arr = [f1(res, 3000), f1(res, 2000), f1(res, 1000)];


