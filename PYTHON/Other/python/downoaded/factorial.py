num=int(input("enter a no to find its factorial")
factorial=[ ]

# check if the number is negative, positive or zero
if num < 0:
   print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
   print("The factorial of 0 is 1")
else:
   for i in range(2,num + 1):
       factorial.append(i)
   for i in range(2,len(factorial)-1)
   print(factorial[i],'*')
   print("The factorial of",num,"is" factorial)
