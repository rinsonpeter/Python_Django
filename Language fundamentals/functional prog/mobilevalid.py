# validate vehiche registration number
#rin123@gmail.com
import re

rule = '\w*[@]gmail[.]com'
regno = input("enter vehicle reg number:")
matcher = re.fullmatch(rule, regno)

if matcher != None:
    print("valid")
else:
    print("invalid")
