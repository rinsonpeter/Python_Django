pattern=open("tttt","r")
print("type of pattern",type(pattern))
dictt={}

for lines in pattern:
    data=lines.rstrip("\n").split(" ")
    print(data)
    print("_____________________________________")
    for i in data:
        if i not in dictt:
            dictt[i] = 1
        else:
            dictt[i] += 1

for j in dictt:
    if dictt[j] > 1:
        print(j, ":", dictt[j])


