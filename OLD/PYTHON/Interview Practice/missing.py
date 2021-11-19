lst = [5,4,2,1]
count = 0

for i in lst:                                    # finds length
    count = count+1

for i in range(0, count-1):                       # sort                                                           

    for j in range(0, count-(i+1)):
        if lst[j] > lst[j+1]:
            lst[j], lst[j+1] = lst[j+1], lst[j]
    


for i in range(0, count-1):                      #check missing

    if lst[0] != 1:                              #check at pos 1
        print("Missing : ", 1)
        break
    elif lst[i+1] != lst[i]+1:                #2!=2,3!=3,   check in b/w
        print("Missing : ", lst[i]+1)
    elif((count+1)!=lst[count-1]):               # check at end pos  
        print("Misssing : ",count+1)   
        break 
