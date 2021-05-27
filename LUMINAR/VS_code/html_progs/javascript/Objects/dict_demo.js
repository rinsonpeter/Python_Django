var student={rol:1001,name:"sajay",total:100,studentdata:function(){
    console.log("Name: "+this.name+"roll : "+this.rol+"total marks: "+ this.total)
}}
console.log("Student name: "+student["name"])

console.log("check if gender in student: "+"gender" in student)
student["gender"]="M";

console.log("student data: "+student)
student.studentdata()