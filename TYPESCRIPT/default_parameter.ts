function Greet(greeting: string = "Hello", name: string) : string {
    return greeting + ' ' + name + '!';
}

Greet(undefined, 'Steve');//returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"
