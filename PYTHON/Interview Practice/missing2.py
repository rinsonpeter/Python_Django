# lst=[2,1,4,3]
# count=0

# for i in lst:                                #length of list
#     count+=1

# for i in range(1,count+1):
#     if i not in lst:
#         print("missing number: ", i)
#         break
#     elif i==count:
#         print("Missing number: ", i+1)       # if last number
           

lst=[2,5,3,4]
count=0

for i in lst:                                #length of list
    count+=1

for i in range(0,count+1):
    if i+1 not in lst:
        print("missing number: ", i+1)
        break          
