lst=[1,2,2,4,6,8,6]
lst1=[]

for i in lst:
    if i not in lst1:
        lst1.append(i)

print("original list      :",lst)
print("Douplicates removed:",lst1)