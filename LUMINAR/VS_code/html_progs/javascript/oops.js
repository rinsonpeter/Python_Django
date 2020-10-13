class student{
    set_student(roll,name,marks){
        this.roll=roll;
        this.name=name;
        this.marks=marks;
    }
    get_student(){
        console.log("Roll no:"+this.roll)
        console.log("Name   :"+this.name)
        console.log("Marks  :"+this.marks)
    }
}

let obj=new student()
obj.set_student(1001,"Sajay",100);
obj.get_student()