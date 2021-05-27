var num=Number(prompt("enter a number: "))


function factorial(num){
    i=1;
    fact=1;
    while(i<=num){

        fact=fact*i;
        i++;
    }
    return fact
}
alert("factorial of "+num+" is "+factorial(num))





