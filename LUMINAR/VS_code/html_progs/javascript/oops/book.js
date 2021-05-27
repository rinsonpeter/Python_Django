//javascript\My_javascript\Assignment_javascript\oops
class book {
    constructor(id, name, page_no, price) {
        this.id = id;
        this.name = name;
        this.page_no = page_no
        this.price = price;
    }
    price_above_250() {
        if (this.price > 250) {
            console.log(this.name)
        }
    }
    upper() {
        console.log(this.name.toUpperCase());
    }
    highest_price() {
        return [this.name, this.price];
    }
}
let obj  = new book(1, "test1", 150, 250)
let obj1 = new book(2, "test2", 150, 600)
let obj2 = new book(3, "test3", 150, 650)
let obj3 = new book(4, "test4", 150, 230)

var arr = []
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)

var bk=arr.filter(ob=>ob.price>250)
for (book of bk){
    console.log(book.name)
}
//var na=arr.map(obj=>(obj.name).toUpperCase)
//console.log(na)
//var bkj=arr.reduce((obj1,obj2)=>obj1.price>obj2.price?obj1.price:obj2.price)
//console.log("bkj"+bkj)

var bkobj=arr.map(obj=>obj.price).reduce((p1,p2)=>p1>p2?p1:p2)
console.log("map filter highest"+bkobj)

console.log("")
console.log("Book name with price above 250")
for (i of arr) {
    i.price_above_250()
}
console.log("")
console.log("BOOK NAMES TO UPPER")
for (i of arr) {
    i.upper()
}
console.log("")
console.log("Book name with highest price")
//var x = "";
//var z = "";
let high = 0;
for (i of arr) {
    x = i.highest_price()
    if (x[1] > high) {
        high = x[1]
        z = x[0]
    }

}
console.log(z + "          price: " + high)