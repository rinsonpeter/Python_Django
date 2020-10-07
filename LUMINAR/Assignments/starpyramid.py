#n=int(input("enter a limit: "))    #4
#for i in range(0,n,1):
#    print(" " * (n - 1 - i) + "*" * ((2 * i) + 1))

x=int(input("enter a limit: "))
for i in range(0,x):
    for j in range(0,x-1-i):    #3,2,1
        print(end=" ")
    for k in range(0,i+1):      #1,2,3
        print("*",end=" ")
    print()

