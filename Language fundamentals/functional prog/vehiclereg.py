# validate vehiche registration number
import re

rule = '[Kk][Ll][0-9]{2}[a-z]{1,2}\d{4}'
regno = input("enter vehicle reg number:")
matcher = re.fullmatch(rule, regno)

if matcher != None:
    print("valid")
else:
    print("invalid")
