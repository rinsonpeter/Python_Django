from re import *

pattern='[abc]'
pattern2='[a-z]'
pattern3='[A-Z]'
pattern4='[a-zA-Z]'

matcher=finditer(pattern,"abc jdhlajliajajia")
for match in matcher:
    print(match.start())
    print(match.group())
print("_________________________________________________")
matcher1=finditer(pattern2,"abcvsdhdgsh jdhlajliajajia")
for match in matcher1:
    print(match.start())
    print(match.group())
print("_________________________________________________")
matcher2=finditer(pattern3,"abcvAAAAsdhdgsh jdhlajliajajia")
for match in matcher2:
    print(match.start())
    print(match.group())
print("_________________________________________________")
matcher3=finditer(pattern4,"abcvsdhdgsh jdhlajliajajia")
for match in matcher3:
    print(match.start())
    print(match.group())

