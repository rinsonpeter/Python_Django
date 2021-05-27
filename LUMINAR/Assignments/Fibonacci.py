n=int(input("enter number of elements: "))

x=0
y=1
sum=0

print(x,y,end=" ")

for i in range(0,n):
    sum=x+y
    print(sum,end=" ")
    x=y
    y=sum
