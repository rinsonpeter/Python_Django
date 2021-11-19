lst=[1,2,3,4,5,6,7]

element=int(input("enter an element: "))

for i in lst:
    for j in lst:
        if (i+j==element):
            print(i,j)
            
        else:
            pass
