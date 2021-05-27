var string="HTHHHHTTMMMMX"
var dict={}

for(i of string){
    if (i in dict){
        dict[i]+=1      //h:2
    }
    else{
        dict[i]=1       //h:1    
    }
}
console.log(dict)
console.log("Recursive Letters")
for (j in dict){
    if(dict[j]>1){
        console.log(j+":  "+dict[j]);
    }   
}

