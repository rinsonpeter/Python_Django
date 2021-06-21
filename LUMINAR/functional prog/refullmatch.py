from re import *
rule='^[1-9][0-9]{9}$'

varname=input("enter variable name:")
matcher=fullmatch(rule,varname)
print(type(matcher))
if matcher!=None:
    print("valid")
else:
    print("invalid")