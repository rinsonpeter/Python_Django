import re

txt = "The rain in 9Spa7in"

#Check if the string contains any digits (numbers from 0-9):

x = re.finditer("\d", txt)

#print(x)
for match in x:
    print("index ",match.start(), ":", match.group())

if x:
  print("Yes, there is at least one match!")
else:
  print("No match")
