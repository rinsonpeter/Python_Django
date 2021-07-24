lst=[1,2,3,4,5,6,7,8,9]
element=int(input(" enter an element to search: "))
flag=0
print(lst)

for i in lst:
    if(i==element):
        flag=1
        break
    else:
        pass

if flag==0:
    print("element not found")
else:
    print("element found at position ",i)