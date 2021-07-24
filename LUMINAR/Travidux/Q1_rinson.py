n=int(input("enter number of rows: "))

for i in range(n,0,-1):
    for j in range(i,0,-1):
        print('*',end=" ")
    for j in range(2*(n-i)-1):     
        print(" ",end=" ")
    for j in range(i,0,-1):
        if j==n:
            pass
        else:
            print("*",end=" ")
    print()
for i in range(n):
    for j in range(i+1):
        print('*',end=" ")
    for j in range((2*(n-i-1))-1):
        print(" ",end=" ")
    for j in range(i+1):
        if j==n-1:
            pass
        else:
            print("*",end=" ")  
    print()

