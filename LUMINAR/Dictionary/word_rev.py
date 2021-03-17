strr="I am Rinson Peter"

temp=" "
lst=[]
count=0
ptr=0
for i  in strr:
    count+=1

for i in strr:
    ptr+=1
    if count == ptr:
        temp+=i            #for last word
        lst.append(temp)
    elif i!=" ":
        temp+=i
    else:
        lst.append(temp)
        temp=" "


length=0
for i in lst:
    length+=1 

for i in range(length,0,-1):
    print(lst[i-1],end=" ")