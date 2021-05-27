class parent{
    phone(){
        console.log("POCO F!")

    }
}

class child extends parent{
    phone(){
        console.log("I Phone")
    }
}


let obj =new child()
obj.phone()