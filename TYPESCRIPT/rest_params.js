function Greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Steve", "Bill","sasi")); // returns "Hello Steve, Bill!"
Greet("Hello"); // returns "Hello !"
