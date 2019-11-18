//1.
function foo() {
    let a = 2;
    return function bar() {
        console.log(a);
    }
    // return bar();
}

let baz = foo();
baz();
// After foo() executed, normally we would expect that the entirety of the inner scope of foo()
// would go away, because we know that the engine employs a garbage collector that comes along and
// frees up memory once it’s no longer in use. Since it would appear that the con‐ tents of foo()
// are no longer in use, it would seem natural that they should be considered gone.
// But the “magic” of closures does not let this happen. That inner scope is in fact still in use,
// and thus does not go away. Who’s using it? The function bar() itself.
//let fn;

//2.
let fn;
function foo1() {
    let a1 = 3;
    function baz1() {
        console.log(a1);
    }
    fn = baz1;
}
function bar1() {
    fn();
}
foo1();
bar1();

//3.
function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}
wait('Hello,  closure!!!!');

//4. The most common canonical example used to illustrate closure involves the humble for loop.(var)
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}

