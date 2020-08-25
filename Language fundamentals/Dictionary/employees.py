employee={
    "eid":1001,
    "ename":'Dongo',
    "designation":'developer',
    "salary":15000}

print(employee["ename"])
if "company name" not in employee:
    employee["company name"]='Luminar'    #added a key value paur

employee["salary"]+=5000                    #modified a value

for i in employee:
    print(i,":",employee[i])