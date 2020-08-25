class employee:
    def __init__(self,eid,ename,des,sal):
        self.eid=eid
        self.ename=ename
        self.des=des

    def printvalues(self):
        print(self.eid)
        print(self.ename)
        print(self.des)

obj=employee(1001,"manu","trainer",30000)
obj.printvalues()