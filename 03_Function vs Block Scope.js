function foo(a) {
    let b = 2;
    //some code
    function bar() {
        //....
    }
    //more code
    let c = 3;
}

// console.log(a); ReferenceError: a is not defined
// console.log(b); ReferenceError: b is not defined
// console.log(c); ReferenceError: c is not defined
console.log(foo()); //undefined
//console.log(bar()); ReferenceError: bar is not defined
console.log(foo(3)); //undefined