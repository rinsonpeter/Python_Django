strr="abc abc abcdc abc  bcddabc"
count=0
length=0
for i in strr:
    length+=1

for i in range(0,length):
    if strr[i]=="a":
        if strr[i+1]=="b":
            if strr[i+2]=="c":
                count+=1
            

print(count)
