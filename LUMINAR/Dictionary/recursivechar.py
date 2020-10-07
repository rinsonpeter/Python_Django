pattern=open("tttt","r")
print("type of pattern",type(pattern))
dict={}
for lines in pattern:
    data=lines.rstrip("\n").split(" ")
    for i in data:
        if i not in dict:
            dict[i] = 1
        else:
            dict[i] += 1

for j in dict:
    if dict[j] > 1:
        print(j, ":", dict[j])




