setTimeout(function () {
    console.log('2000 milliseconds have passed since this demo started');
}, 2000);

/* Creating a function and passing that in. */
function foo() {
    console.log('2000 milliseconds have passed since this demo started');
}
setTimeout(foo, 2000);
