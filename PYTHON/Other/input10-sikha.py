
rows=int(input("enter the number of rows:"))   #10

toprow=rows//2                                 #5     
for i in range(toprow,rows+1,2):
    for j in range(1,rows-i,2):
        print(' ',end='')
    for j in range(1,i+1):
        print('*',end='')
    for j in range(1, rows - i+1, 2):
        print(' ', end='')
    for j in range(1, rows - i, 2):
        print(' ', end='')
    for j in range(1, i + 1):
        print('*', end='')
    for j in range(1, rows - i + 1, 2):
        print(' ', end='')
    print('\r')

for i in range(rows,0,-1):
    for j in range(i,rows):
        print(' ',end='')
    for j in range(1,2*i):
        print('*',end='')
    print('\r')






