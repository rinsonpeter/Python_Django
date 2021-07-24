class Employee: # create Employee class name  
    dept = 'Information technology'  # define class variable  
    def __init__(self, name, id):  
        self.name = name       # instance variable  
        self.id = id             # instance variable  
  
# Define the objects of Employee class  
emp1 = Employee('John', 'E101')          
emp2 = Employee('Marcus', 'E105')  
emp3=  Employee('Marcus2', 'E1055')
print (emp1.dept)   
print (emp2.dept)   
print (emp1.name)   
print (emp2.name)   
print (emp1.id)    
print (emp2.id)   
print("-------------------------------")
# Access class variable using the class name  
print (Employee.dept) # print the department  
print("-------------------------------")  
# change the department of particular instance  
emp1.dept = 'Networking'  
print (emp1.dept)   
print (emp2.dept)   
print("-------------------------------")  
# change the department for all instances of the class  
Employee.dept = 'Database Administration'  
print (emp1.dept)   
print (emp2.dept) 
print (emp3.dept)  

