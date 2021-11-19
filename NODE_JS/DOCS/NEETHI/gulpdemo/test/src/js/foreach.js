 numbers = {one: 1, two: 2, three: 3, four: 4}

Object.keys(numbers).forEach(function(key){
    var value = numbers[key];
    doSomethingWith(value);
    /* For example, key == "one" and value == 1 */
});
