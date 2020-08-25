low=int(input("enter lower limit: "))
upper=int(input("enter upper limit: "))
sumeven=0
sumodd=0
for i in range(low,upper+1):
    if(i%2==0):
        sumeven=sumeven+i
    else:
        sumodd=sumodd+i

print(sumeven)
print(sumodd)