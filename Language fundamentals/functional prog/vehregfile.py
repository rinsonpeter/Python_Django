# validate vehiche registration number
# rin123@gmail.com
import re

lst = []
#        K    L   43       GH         2073
rule = '[Kk][Ll][0-9]{2}[a-zA-Z]{1,2}\d{4}'

f = open("rvehicleregfile", "r")
for lines in f:
    data = lines.rstrip("\n")
    matcher = re.fullmatch(rule, data)

    if matcher != None:
        lst.append(data)
        print("valid")
    else:
        print("invalid")

print(lst)
