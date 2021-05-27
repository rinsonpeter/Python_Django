class bank{
    static set_bank(){
        bname="SDK"
    }
    constructor(acno,pname){
        this.acno=acno;
        this.pname=pname;
        this.balance=3000;
    }
    deposit(amount){
        this.balance+=amount;
        console.log("account credited"+this.balance+bank.bname)
    }
    withdraw(amount){
        if (amount>this.balance){
            console.log("insufficient amount")
        }
        else{
            this.balance-=amount;
        }
    }
}

let obj= new bank(1001,"sajay")

obj.withdraw(2000);
obj.deposit(1000);