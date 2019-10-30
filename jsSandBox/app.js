let x = {
    a: 1,
    b: 'x'
}

let val = typeof x === 'object';

console.log(val)


function check(a,b) {
    return a - b;
}

console.log(check(2,3))


function Tree(name) {
    this.name = name;
  }
  
  var theTree = new Tree('Redwood');
  console.log('theTree.constructor is ' + theTree.constructor);