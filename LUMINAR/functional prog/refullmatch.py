from re import *
rule='[a-k][369][a-zA-Z]*'

varname=input("enter variable name:")
matcher=fullmatch(rule,varname)
print(type(matcher))
if matcher!=None:
    print("valid")
else:
    print("invalid")