arr=[];
var limit=Number(prompt("enter limit for array"))

for(i=0;i<limit;i++){
    arr.push(prompt("enter element: "));
}

var search_item=Number(prompt("enter a number: "))
for (item of arr){
    if (item==search_item){
        flag=1;
        break
    }
    else{
        flag=0;
        
    }    
    if (flag==1){
        console.log("item exists")
    }
    else{
        console.log("item does not exist")
    }
    


}