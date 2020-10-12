# n=int(input("enter a limit: "))    #4
# for i in range(0,n,1):
#    print(" " * (n - 1 - i) + "*" * ((2 * i) + 1))         #   0: 5-1-0=4    2*0+1:1    =5
#                                                             # 1: 5-1-1=3    2*1+1:3    =5

x=int(input("enter a limit: "))
for i in range(0,x):
    for j in range(0,x-1-i):    #3,2,1              # 5-1-0:4    5-1-1:3   5-1-2:2
        print(end=" ")
    for k in range(0,i+1):      #1,2,3              # 0+1:1      1+1:2   2+1: 3
        print("*",end=" ")
    print()

