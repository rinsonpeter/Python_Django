class person:
    def setvalues(self, name, age):
        self.age = age
        self.name = name

    def printvalues(self):
        print(self.name)
        print(self.age)


class bank(person):
    bnkname="SDK"
    def __init__(self, ac_no, name, bal):
        self.ac_no = ac_no
        self.name = name
        self.bal = bal

    def balenq(self):
        print("Ac No  :", self.ac_no)
        print("Name   :", self.name)
        print("Balance:", self.bal)

    def withdraw(self, amount):
        if amount > self.bal:
            print("Insuffiient balance\nAvailable balance:", self.bal)
        else:
            self.bal -= amount
            print("Amount withdrawn:", amount, "\nBalance amount:", self.bal)

    def deposit(self, amount):
        self.bal += amount
        print("Amount deposited:", amount, "\nBalance amount:", self.bal)

obj = bank(1001, "Manu,", 30000)
n = 1
while (n == 1):
    print("1.Check Ac details\n2.Deposit\n3.Withdraw\n4.exit")
    x = int(input("Enter your choice: "))
    if x == 1:
        obj.balenq()
    elif x == 2:
        y = int(input("Enter amount to deposit: "))
        obj.deposit(y)
    elif x == 3:
        z = int(input("Enter amount to withdraw: "))
        obj.withdraw(z)
    elif x == 4:
        n = 0
        break
    else:
        print("Invalid entry")
        n = int(input("\nprogram exiting....Press '1' to return to main menu:"))
