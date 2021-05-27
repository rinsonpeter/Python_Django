arr=[];
odd=[];
even=[];
sum=0;
var limit=Number(prompt("enter limit for array: "));


for(i=0;i<limit;i++){
    arr.push(Number(prompt("enter element: ")));
}


for (item of arr){
    if (item%2==0){
        even.push(item)
    }
    else{
        odd.push(item)
    }
    
}
console.log("even list: ["+even+"]")
console.log("odd list: ["+odd+"]")
alert("Odd list : "+odd)
alert("Even List : "+even)



