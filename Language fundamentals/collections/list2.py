lst=[]

for i in range(50,61):
    lst.append(i)

print(lst)
even=[]
odd=[]

for j in lst:
    if (j%2)==0:
        even.append(j)
    else:
        odd.append(j)

print("even:",even)
print("odd :",odd)


