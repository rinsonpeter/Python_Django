class Employee:
    company_name="ABC"
    def __init__(self,id):
        self.id=id


obj=Employee(1001)
print(obj.company_name)
print(obj.id)

