# program to check even or odd

num=int(input('enter number: '))

if (num==0):
    print(num,"is neither odd nor even")
elif (num%2==0):
    print('even number')
else:
    print("odd number")
