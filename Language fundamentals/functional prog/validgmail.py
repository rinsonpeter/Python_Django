# validate vehiche registration number
import re

rule = '[0-9]{10}'
regno = input("enter vehicle reg number:")
matcher = re.fullmatch(rule, regno)

if matcher != None:
    print("valid")
else:
    print("invalid")
