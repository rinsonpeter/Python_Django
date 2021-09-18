def combine_even(str1, str2):

    str3=""
    for i in range(0,len(str1)):
        if (i%2==0):
            str3+=str1[i]+str2[i]  
        else:
            pass  
    return str3 

str3=combine_even("abcdef","zyzcat")
print(str3)
