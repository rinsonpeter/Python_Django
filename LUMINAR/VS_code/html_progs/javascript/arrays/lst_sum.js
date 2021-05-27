arr=[];
sum=0;
var limit=Number(prompt("enter limit for array"))


for(i=0;i<limit;i++){
    arr.push(Number(prompt("enter element: ")));
}


for (item of arr){
    sum+=item;
}

alert(sum)



