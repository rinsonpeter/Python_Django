lst=[1,4,3]
count=0

for i in lst:
    count+=1

for i in range(1,count+1):
    if i not in lst:
        print("missing number: ", i)
        break
    elif i==count:
        print("Missing number: ", i+1)
           
