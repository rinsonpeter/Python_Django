listOfStudents = ['Mohan', 'John', 'Ramesh', 'Mohan', 'John']
print("List of Students:", listOfStudents)
uniqueNames = set(listOfStudents)
print("Set of uniqueNames:", uniqueNames)

listOfMarks = [8, 7, 6, 7, 8, 8, 7, 6, 7, 8, 9]
print("List of Makrs:", listOfMarks)
setOfMarks = set(listOfMarks)
print("Set of marks:", setOfMarks)

list1 = [1, 2, 3]
list2 = []
if list1:
    print("list1 is notttttttttttt empty")
else:
    print("list1 is not empty")

if list2:
    print("list2 is notttttttttt    empty")
else:
    print("list2 is not empty")


text = 'PYTHON'
# printing both strings
print("Original String-", text)
# sorting the string alphabetically
print("Sorted String-", ''.join(sorted(text)))


strangeList = [4, 10.2, "cherry", ["an other list", 1]]
strangeList.append(1)
print(strangeList)
# try to print the 4th element :
print(strangeList[3])

str = "abc /i !? 20321?"
resultStr = ""
for character in str:
    if character.isalnum():
        resultStr = resultStr + character
print(resultStr)

import math

radius = 5
area = math.pi * radius * radius
print(f"Area = {area:.2f}")

radius = 5
area = math.pi * radius * radius
print("Area = ", round(area, 2))


# Take user input or enter the value of strings manually inside the code
my_str = input("Enter a string: ")

# Creating an empty list
lst = list()

# Calculating the length of the string
length = len(my_str)

# Converting the string to list
for x in my_str:
    lst.append(x)

# Sorting the list using bubble sort
for i in range(length - 1):
    for j in range(length - i - 1):
        if lst[j] > lst[j + 1]:
            lst[j], lst[j + 1] = lst[j + 1], lst[j]

# Converting the sorted list into string
sorted_str = ""
for m in lst:
    sorted_str = sorted_str + m

# Printing the Sorted string
print("The sorted string is: ", sorted_str)

dicte={}
dicte[1.5]= 'one'
dicte['1']= 1
dicte[(2,3)]=2
print(type(dicte['1']))
print(dicte)

list2=[1,3,'5',5,3]
print(list2)
set1=set(list2)
print(set1)

for i in set1:
    print(i,type(i))
