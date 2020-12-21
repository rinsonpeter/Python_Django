# python 3.7.1
n = 10
y = n//2
x = (n//3) # 3
# 5

print()

for i in range(0, x):
    for j in range(x-i-1):
        print(' ', end=' ')
    for j in range(2*i+y):
        print('*', end=' ')
    for j in range(y-(2*i), 0, -1):
        print(' ', end=' ')
    for j in range(2*i+y):
        print('*', end=' ')

    print()

for a in range(n, 0, -1):
    for k in range(n-a):
        print(" ", end=" ")
    for k in range((2*a)-1, 0, -1):
        print('*', end=" ")

    print()
