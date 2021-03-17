f=open("n","r")
lst=[]
odd=[]
even=[]
for num in f:
    lst.append(int((num)))

for i in lst:
    if (i%2==0):
        even.append(i)
    else:
        odd.append(i)

print(lst)
print("Odd :",odd)
print("Even:",even)