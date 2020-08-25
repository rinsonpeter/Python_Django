from re import *

pattern = "\d"
count = 0

matcher = finditer(pattern, "abc99999 jdhlajliajajia")
print(type(matcher))
for match in matcher:
    print("index: ",match.start())
    print("Element:",match.group())
    print("------------")
    count += 1
print("Pattern found",count,"times")
