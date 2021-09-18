low=int(input("enter a  lower limit: "))
upper=int(input("enter upper limit: "))

sum=0
for j in range(low,upper+1):
    if (j>1):
        for i in range(2, j):
            if (j % i) == 0: 
                break
        else:
            sum+=j

print("sum of prime numbers in between lower and upper limit: ",sum)