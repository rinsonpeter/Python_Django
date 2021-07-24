lst=[2,4,6]             #10,8,6
'''''
lst=[]
for j in range(0,3):
    element=int(input("enter an element: "))
    lst.append(element)
'''
x=len(lst)
y=[]

for i in range(0,x):
    if (i==0):
        y.append(lst[1]+lst[2])
    elif (i==1):
        y.append(lst[0]+lst[2])
    else:
        y.append(lst[0]+lst[1])

print(lst)
print(y)
