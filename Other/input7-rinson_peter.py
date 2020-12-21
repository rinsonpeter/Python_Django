num=int(input("enter number of rows: "))

for i in range(num):
    val=i+1
    decrement=num-1
    for j in range(i+1):
        print(val,end=" ")
        val+=decrement
        decrement-=1
    print()    