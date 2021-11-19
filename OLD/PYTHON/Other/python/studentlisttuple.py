students="john","mary", "steve"
print("student type",type(students))
students=["john","mary","steve"]
print(type(students))
print(len(students))
print("student at index 0:",students[0])
print(students[-1])
print("student till index 1:",students[:2])               #exluding 2nd index
                                # tuple never changes like list
months=("jan","feb","Mar")
print("month type:",type(months))
print("first month:",months[0])
print(months)
                                #change list indexx 1
print(students)
students[0]="George"
students.append("Kate")         #at the end
students.insert(0,"PETER")      #at desired index
print(students)
students.pop()                  #at end
students.pop(1)
print(students)
students.remove("mary")
print(students)
