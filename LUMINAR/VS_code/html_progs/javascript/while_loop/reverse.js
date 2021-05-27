num = Number(prompt("enter the number: "))
res = 0;
x=num;

while (num != 0) {
    // we have to fetch last digit
    digit = num % 10
    res = (res * 10) + digit
    num = Math.floor(num / 10)
}

alert("reverse of "+x+" is "+res)
