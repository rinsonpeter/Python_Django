list1=[1,1,1,2,2,2,3,3,3,4,4,5,6,7,6]
dict={}
for i in list1:
    if i not in dict:
        dict[i]=1 
    elif i in dict:
        dict[i]+=1
        


print(dict)            
