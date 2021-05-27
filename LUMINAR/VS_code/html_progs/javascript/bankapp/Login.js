class Bank {

    static getAccountDetails() {
        var data = {
            user1: { name: "testone", password: "testone", accno: 1000, balance: 5000 },
            user2: { name: "testtwo", password: "testtwo", accno: 1001, balance: 5000 },
            user3: { name: "testthree",password:"testthree", accno: 1002, balance: 5000 }
        }
        return data

    }
    static log() {
        let uname = document.querySelector("#uname").value;
        console.log(uname)
        let pass = document.querySelector("#pass").value;
        console.log(pass)
        let data = Bank.getAccountDetails();
        console.log(data)

        if (uname in data) {
            let password = data[uname]["password"];
            if (pass == password) {
                alert("login sucess")
                window.location.href = "user_home.html"
            }
            else {
                alert("login failed")
            }
        }
    }

    static deposit() {
        let user = document.querySelector('#dname').value;
        let amount = Number(document.querySelector("#damt").value);
        let data = Bank.getAccountDetails()
        let bal=data[user]["balance"]

        if (user in data) {
            bal += amount;
            alert("Ac credited "+amount+" Current Balance:" + bal);
        }
        else{
            alert("invalid")
        }
    }
    static withdraw() {
        let user = document.querySelector('#wname').value;
        let amount = Number(document.querySelector("#wamt").value);
        let data = Bank.getAccountDetails();
        let bal=data[user]["balance"]
        alert

        if (user in data) {
            if(amount>bal){
                alert("insufficient Balance")
            }
            else{
                bal -= amount;
                alert("Ac debited by "+amount+
                "    Current Balance: "+bal)
            }  
        }
        else{
            alert("invalid")
        }
    }
    static vieww(){
        let user=document.querySelector('#bname').value;
        let data = Bank.getAccountDetails();
        let bal=Number(data[user]["balance"])
    
        if(user in data){
            document.getElementById('bamt').value=bal
        }
        else{
            alert("invalid user")
        }
    }
}
