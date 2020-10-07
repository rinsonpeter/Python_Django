f = open("Emplyees",'r')
emp = {}

for lines in f:
    id, name, desig, salary = lines.strip("\n").split((","))
    if (id not in emp):
        print()
        emp[id] = {"id": id, "name": name, "desig": desig, "sal": salary}    # {1001:{id:1001,name:ajay,desig:QA,sal:25000}
def fetchData(**kwargs):           # kwargs is dict, kwargs={id='1001',option='sal'}
    nwid=kwargs['id']
    if (nwid not in emp):
        print("employee not exist")
    else:
        print(emp[nwid]["name"])                          #emp['1001']['name']>>>ajay
        if "option" in kwargs:                            #if (option) key is passed as argument
            val = kwargs["option"]                        #kwargs['option']>>>sal
            print(emp[nwid][val])                         #emp['1001']['sal']
        else:
            print("invalid filter")
x=input("enter id to search:")
y=input("enter filter'desig/sal':")
fetchData(id=str(x),option=str(y))
