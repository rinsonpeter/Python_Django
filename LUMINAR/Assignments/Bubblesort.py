limit=int(input("enter number of elements:  "))
lst=[]

for i in range(limit):
    lst.append(int(input("enter element: ")))

print("unsorted",lst)

for j in range(limit):
    for k in range(j-1):
        if(lst[k]>lst[k+1]):
            temp=lst[k]
            lst[k]=lst[k+1]
            lst[k+1]=temp

print("sorted",lst)


