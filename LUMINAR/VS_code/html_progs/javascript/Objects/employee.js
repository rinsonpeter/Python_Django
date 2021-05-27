employee={eid:1001,ename:"Dongo",
            desig:"developer",sal:15000}

console.log("OLD EMPLOYEE DETAILS:")
for (i in employee){
    console.log(i+": "+employee[i])
}
x="company name";
if (!(x in employee)){
    employee[x]=prompt("enter company name: ")
}

if ("sal" in employee){
    employee["sal"]+=Number(prompt("raise salary by: "))
}
console.log("__________________________")
console.log()
console.log("UPDATED EMPLOYEE DETAILS:")
for (i in employee){
    console.log(i+": "+employee[i])
}