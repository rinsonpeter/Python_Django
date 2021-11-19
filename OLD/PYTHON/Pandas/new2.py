import pandas as pd

#Please change Path for file
data = pd.read_excel (r'F:\python\Python\Luminar\Python_Django\LUMINAR\Pandas\EmployeeDetails (2).xlsx') 
df = pd.DataFrame(data, columns= ['Employee ID','Employee Name','Gender','Department','Years of Experience'])

length=len(df.index)                                 #length of row
data_dict = df.to_dict()                             #converting to dict

print()    
eid=input("Enter employee id: ")
detail=input("Enter coloum value to filter: ")
print()

flag=0
flag1=0


if eid not in str(data_dict['Employee ID'][eid]):
    print("Employee does not exist")
else:
    print(data_dict['Employee ID'][eid])
    if detail in data_dict:
        print("Detail: ",data_dict[detail][i])          
    else:
        print(detail,"does not exist")        

