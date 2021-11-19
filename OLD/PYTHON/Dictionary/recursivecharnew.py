pattern="gehjekk jndj sjdjs nbjbsjbdj hello"
print("type of pattern:",type(pattern))
dictt={}
ctr=0
temp=" "
lst=[]
d={}
ptr=0
for lines in pattern:
    ctr+=10
    
    if len(pattern)==ctr:
        ptr+=1
        temp+=lines
        lst.append(temp)
        if temp not in d:
            d[temp]=1
        else:
            d[temp]+=1
    elif lines!=" ":
        temp+=lines    
    else:
        lst.append(temp)
        if temp not in d:
            d[temp]=1
        else:
            d[temp]+=1
        temp=" "
        ptr+=1

print(lst)        
print(ptr)        

#for ls in lst:
#    if ls not in d:
#        d[ls]=1
#    else:
#        d[ls]+=1
print(d)        
        
    



