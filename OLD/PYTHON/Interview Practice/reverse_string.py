def reversee(s):
    strr = " "
    for i in s:
        strr = i+strr
    
    return strr
  
s = "rin__son"
  
print ("The original string  is : ",end="")
print (s)
  
print ("The reversed string(using loops) is : ",end="")
print (reversee(s))