# Program to sort given 3 numbers

num1 = (int(input("enter a number")))
num2 = (int(input("enter a number")))
num3 = (int(input("enter a number")))

if (num1 == num2) & (num1 == num3):
    print('all numbers are equal')

elif (num1 > num2) & (num1>num3):
     if (num2>num3):
         print("sorted :",num3,num2,num1)
     else:
         print("sorted: ",num2,num3,num1)

elif (num2 > num1) & (num2>num3):             #(65>45) and 65>55
     if (num1>num3):
         print("sorted :",num3,num1,num2)
     else:
         print("sorted: ",num1,num3,num2)

elif (num3 > num1) & (num3>num2):
     if (num1>num2):
         print("sorted :",num2,num1,num3)
     else:
         print("sorted: ",num1,num2,num3)
