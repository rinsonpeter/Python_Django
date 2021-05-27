let empolyee=[
        {eid:100,name:"ajjay",desig:"devop",join:1981,resign:2003},
		{eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
		{eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
		{eid:103,name:"jhony",desig:"ba",join:1989,resign:2010},
		{eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
		{eid:105,name:"larie",desig:"qa",join:1987,resign:2010}	
]
console.log("ALL EMPLOYEE NAME AND DESIGNATION")
for(i in empolyee){
    console.log("Employee Name: "+empolyee[i].name+"         Designation: "+empolyee[i].desig)
}
console.log("")
console.log("ALL EMPLOYEE DETAILS WHOSE DESIGNATION IS DEVOP")
for (i in empolyee){
    if (empolyee[i].desig=="devop"){  //var x=employee.filter(obj1=>obj1.desig=="devop")
        console.log(empolyee[i])
    }
}    
console.log("EMPLOYEE FROM 80s")
for(i in empolyee){
    if ((empolyee[i].join>1980) && (empolyee[i].join<1990)){ //var x=empolyee.filter(obj1=>(obj1.join>1980 && obj1.join<1990))
        console.log(empolyee[i])
    }
}
console.log("EMPLOYEE EXPERIENCE>9")
for (i in empolyee){
    if(empolyee[i].resign-empolyee[i].join>9){   //var f=empolyee.filter(obj1=>obj1.resign-obj1.join>9)
        console.log(empolyee[i])
    }
}
console.log("SORTED")
var srt=empolyee.sort((obj1,obj2) => obj1.join-obj2.join)
console.log(srt)