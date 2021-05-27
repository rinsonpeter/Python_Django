class mathop{
    add(){
        console.log("inside NO arg methd")
    }
    add(num){
        console.log("inside 1 agr")
    }
    add(num1,num2){
        console.log("inside 2 arg")
    }
}


let x=new mathop()
x.add(22);
x.add(10,20);
x.add();