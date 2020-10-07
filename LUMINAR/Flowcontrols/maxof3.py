num1=(int(input("enter a number")))
num2=(int(input("enter a number")))
num3=(int(input("enter a number")))

if (num1>num2):
    if (num1>num3):
        print(num1,"is greatest")
    else:
        print(num3, "is greatest")

elif (num2>num1):
    if (num2 > num3):
        print(num2, "is greatest")
    else:
        print(num3, "is greatest")

elif (num3>num1):
    if (num3 > num2):
        print(num3, "is greatest")
    else:
        print(num2, "is greatest")

else:
    print("All numbers are equal")
