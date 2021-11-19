from cubefunction import *
from functoperation import *


x=int(input('enter a number and lets find cube: '))
data=cube(x)
print(data)

print("1. Addition")
print("2. Subtraction")
print("3. multiplication")
print("4. division")

num1=int(input("enter a number: "))
num2=int(input("enter a number: "))

choice=int(input("enter your choice: "))
res=0

if (choice==1):
    add(num1,num2)
    print(res)