#123 321

num=int(input("enter a number:"))
reverse=0

while(num!=0):
    digit=num%10
    reverse=(reverse*10)+digit

    print("num",num)
    print("digit",digit)
    print("reverse",reverse)


    num=num//10

print("reverse:",reverse)