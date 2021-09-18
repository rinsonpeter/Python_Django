lst=[1,2,11,15,78,25,55]
lst.sort()

low=0
upp=len(lst)-1
flag=0
element=int(input("enter an element to search: "))

while(low<=upp):
    mid=(low+upp)//2

    if(element>lst[mid]):
        low=mid+1

    elif(element<lst[mid]):
        upp=mid-1

    elif(element==lst[mid]):
        flag=1
        break

if (flag==1):
    print("element found")
else:
    print("element not found")

