class parent{
    phone(){
        console.log("POCO F1");
    }
}
class child {
    m1(){
    console.log("inside child")
}

}
class childOne extends child,parent{
    m2(){
        console.log("inside childone")
    }

}

let obj=new child();
obj.phone()

