# validate vehiche registration number
import re

rule = '[Kk][Ll]\s{0,1}[0-9]{2}\s{0,1}[a-zA-Z]{1,2}\s{0,1}\d{4}'
regno = input("enter vehicle reg number:")
matcher = re.fullatch(rule, regno)

if matcher != None:
    print("valid")
else:
    print("invalid")
