# Reading number of rows
row = int(input('Enter how many lines? '))

with open('new.txt', 'a') as f:
    for i in range(1,row+1):
      
        for j in range(1, row+1-i):
            f.write(' ')
             
        for j in range(1,i+1):
            f.write(str(j))
         
        for j in range(i-1,0,-1):
            f.write(str(j))

        print(" ",file=f)
                   
f.close()