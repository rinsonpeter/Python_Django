list=[9,11,8,5,7,10]     #11-5=6

small=list[0]
big=list[0]

for i in list:
    if i<=small:
        small=i
    if i>=big:
        big=i
            

print(big-small)