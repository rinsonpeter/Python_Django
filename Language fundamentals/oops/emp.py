class emoloyee:
    def __init__(self,id,name,desig,sal):
        self.id=id
        self.name=name
        self.sal=int(sal)
        self.desig=desig
    def printval(self):
        print(self.id,"\n",self.name,"\n",self.desig,"\n",self.sal)
    def __str__(self):
        return self.name
f=open("edetails","r")
emplst=[]
for data in f:
    values=data.rstrip("\n").split(",")
    id=values[0]
    name = values[1]
    desig = values[2]
    sal = values[3]
    obj=emoloyee(id,name,desig,sal)
    emplst.append(obj)
out1=list(map(lambda emp:emp.name.upper(),emplst))
out2=list(filter(lambda emp:emp.sal>50000,emplst))
out3=list(map(lambda emp:emp.sal+5000,emplst))
print("EMPLOYEE NAME TO UPPERCASE")
for ls in out1:
    print(ls)
print("EMPLOYEE WITH SAL>50000")
for ls in out2:
    print(ls)
print("UPDATED SALARY")
print(out3)
print()
for emp in emplst:
    emp.sal+=5000
x=0
for emp in emplst:
    if emp.sal>x:
        x=emp.sal
print("Higest sal:",x)

for emp in emplst:
    x







