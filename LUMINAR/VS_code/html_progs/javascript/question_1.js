var strr="HHHTTTTTMMMM";
var out="";
 dict={}
for (i of strr){
    
    if (i in dict){
        dict[i]+=1
    } 
    else{
        dict[i]=1
    }
}
console.log(dict)

for (j in dict){
    out+=dict[j]+j;
}
console.log(out)