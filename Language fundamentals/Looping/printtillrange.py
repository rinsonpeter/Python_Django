# Program to print even numbers btw a given range

num=int(input("enter a limit:"))

i=int(input("enter lower limit:"))

while(i<=num):
    if (i%2==0):
        print(i)
    i+=1
