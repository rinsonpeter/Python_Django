num=int(input("enter number of rows: "))
for i in range(num):
    value=i+1
    downer=num-1
    for j in range(i+1):       #col=row+1
        print(value,end=" ")    #1    2
        value=value+downer          #2+(7-1)  #3+(7-1)    
        downer=downer-1
    print()
