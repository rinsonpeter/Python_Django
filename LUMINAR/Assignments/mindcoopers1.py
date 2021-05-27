#// Write a function that will take an array and print all non duplicate elements 
#// Input :  [1, 4, 1, 6, 2, 2] 
#// Output : [4, 6]


def printNonDuplicate(array):
    
    for i in range(0,len(array)):
        flag=0
        for j in range(i+1,len(array)-1):
            if array[i]==array[j] & i!=j:
                flag+=1
                break
                
        if flag==0:
            print(array[i])  
     


array =  [1, 4, 1, 6, 2, 2]
printNonDuplicate(array)