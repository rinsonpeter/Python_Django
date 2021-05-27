num1=Number(prompt("enter a number:"))
num2=Number(prompt("enter a number:"))
num3=Number(prompt("enter a number:"))

if(num1==num2){
    if(num2==num3){
        alert("all numbers are equal")
    }
}
else if (num1>num2>num3) {
    alert(":num2 is secondlargest: "+num2)
} 
else if (num2>num1>num3) {
    alert(":num1 is secondlargest: "+num1)
} else {
    alert(num3+":num3 is second largest: "+num3)
} 