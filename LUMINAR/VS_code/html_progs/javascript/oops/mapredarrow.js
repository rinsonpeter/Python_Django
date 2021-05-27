var arr=[5,22,9,10,15,17,19]

                                        //lambda
let f=num1=>num1**3;
console.log(f(3))
                                        //map
var sq=arr.map(num=>num**2)
console.log(sq);
                                        //filter
var even=arr.filter(num=>num%2==0)
console.log(even)
                                        //reduce
var max=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(max)
                                            // sort  num1-num2 asc, num2-num1 desc
var srt=arr.sort((num1,num2)=>num2-num1)
console.log(srt);
