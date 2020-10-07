class emoloyee:
    def __init__(self,id,name,sal):
        self.id=id
        self.name=name
        self.sal=sal

    def printval(self):
        print(self.id)
        print(self.name)
        print(self.sal)

    def __str__(self):
        return self.name

obj=emoloyee(1001,"ajay",25000)

