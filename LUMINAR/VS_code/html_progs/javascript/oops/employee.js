class employee{
    constructor(id,name,sal){
        this.id=id;
        this.name=name;
        this.sal=sal;
    }
    get_employee(){
        console.log("ID no:"+this.id)
        console.log("Name   :"+this.name)
        console.log("Sal  :"+this.sal)
    }
}

let obj=new employee(1001,"sajay",50000)
obj.get_employee()