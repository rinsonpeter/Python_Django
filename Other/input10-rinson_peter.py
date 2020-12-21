temp = int(input("enter the number: "))
n = temp//2
print()

for i in range(2,n):
    for j in range(n-i-1):
        print(" ",end="")
    for j in range(i+1):  
        print("* ",end="")
        
    if temp%2==0:
        for j in range(2*(n - i - 1)):
            print(" ", end="")
    else:
        for j in range(2*(n-i-1)+1):
            print(" ",end=" ")

    for j in range(i+1):
        print("* ",end="")
    print()

for i in range(temp,0,-1):
    for j in range(temp-i):
        print(" ", end="")
    for j in range(i,0,-1):
        print("* ",end="")
    print()