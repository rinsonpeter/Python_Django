lst=["c","c++","python","java","c#"]
lst2=[]
# print(lst[::-1])

# lst.reverse()

# print(lst)

for i in range(len(lst),0,-1):
    print(lst[i-1],end=",")
    lst2.append(lst[i-1])


# print(lst2)