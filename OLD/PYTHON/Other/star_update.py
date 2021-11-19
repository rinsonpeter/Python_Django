# python 3.7.1
n = 20
y = n//2

# 5

print()

for i in range(y,n+1,2):
    for j in range(1,n-i,2):
        print('j', end=' ')
    break    
