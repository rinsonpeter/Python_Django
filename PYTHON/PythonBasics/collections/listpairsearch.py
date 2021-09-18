lst=[1,2,8,3,4,7,9]

element=int(input("enter value: "))
lst.sort()

low=0
upp=len(lst)-1
while(low<=upp):
    data=lst[low]+lst[upp]
    if(data==element):
        print(lst[low], lst[upp])
        low+=1
    elif(data>element):
        upp=upp-1
    elif(data<element):
        low=low+1
    else:
        low=low+1
        