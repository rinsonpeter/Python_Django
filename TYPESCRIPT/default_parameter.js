function Greet(greeting, name) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
Greet(undefined, 'Steve'); //returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"
console.log(Greet(undefined, 'Bill'))