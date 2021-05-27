let empolyee=[

    {eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
    {eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
    {eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
    {eid:103,name:"jhon",desig:"ba",join:1989,resign:2010},
    {eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
    {eid:105,name:"lari",desig:"qa",join:1987,resign:2010},
]
var q=empolyee.map(obj=>[obj.desig,obj.name])
console.log(q)
var f=empolyee.filter(obj=>obj.desig=="devop")
console.log("designation is deop",f)
var d=empolyee.filter(obj=>(obj.join>1980 && obj.join<1990))
console.log("between 1980 and 1990",d)
var f=empolyee.filter(obj1=>obj1.resign-obj1.join>9)//e
console.log("experience greater than 9",f)
var c=empolyee.sort((ob1,ob2)=>ob1.join-ob2.join)
console.log("sorted",c)
