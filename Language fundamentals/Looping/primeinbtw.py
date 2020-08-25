low=int(input("enter a  lower limit: "))
upper=int(input("enter upper limit: "))


for j in range(low,upper+1):
    if (j>1):
        for i in range(2, j):
            if (j % i) == 0:  # 5%(2,,,,4), 9%3==0 True    9%2==0 False
                break
        else:
            print(j, end=" ")









