#program to enter 8 names and pick a random name

import random
limit=int(input('enter no of name: '))
print("type of limit:",type(limit))
print("program to enter names and pick a random name:\n")
people=[]
for i in range(0,limit):
    name=input("enter a name: ")
    people.append(name)
print("type of people:",type(people))
index=random.randint(0,limit)
random_people=people[index]
print("")
print("RANDOM PICK:",random_people.upper())
    
